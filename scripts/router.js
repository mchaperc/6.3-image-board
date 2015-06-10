import LoginView from './views/loginView';
import {UserCollection} from './models/userModel';
import AppView from './views/appView';
import {ImageCollection} from './models/image';

var Router = Backbone.Router.extend({

	routes: {
		'': 'login',
		'app': 'app'
	},

	initialize: function() {

		this.users = new UserCollection();
		this.listenTo(this.users, 'add', function() {
			this.navigate('app', {trigger: true});
		}.bind(this));

		this.images = new ImageCollection();
	},

	login: function() {
		var view = new LoginView({collection: this.users});
		$('#app').html(view.el);
	},

	app: function() {
		var view = new AppView({
			collection: this.images,
			username: this.users.at(0)
		});
		$('#app').html(view.el);
		this.images.fetch();
		console.log(this.images);
	}

});

var router = new Router();

export default router;