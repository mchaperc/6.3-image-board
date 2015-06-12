require.register("main", function(exports, require, module){
  'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

(function () {
  'use strict';

  $(document).ready(function () {

    Backbone.history.start();
  });
})();
  
});

require.register("router", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _viewsLoginView = require('./views/loginView');

var _viewsLoginView2 = _interopRequireDefault(_viewsLoginView);

var _modelsUserModel = require('./models/userModel');

var _viewsAppView = require('./views/appView');

var _viewsAppView2 = _interopRequireDefault(_viewsAppView);

var _modelsImage = require('./models/image');

var Router = Backbone.Router.extend({

	routes: {
		'': 'login',
		'app': 'app'
	},

	initialize: function initialize() {

		this.users = new _modelsUserModel.UserCollection();
		this.listenTo(this.users, 'add', (function () {
			this.navigate('app', { trigger: true });
		}).bind(this));

		this.images = new _modelsImage.ImageCollection();
	},

	login: function login() {
		var view = new _viewsLoginView2['default']({ collection: this.users });
		$('#app').html(view.el);
	},

	app: function app() {
		var view = new _viewsAppView2['default']({
			collection: this.images,
			username: this.users.at(0)
		});
		$('#app').html(view.el);
		this.images.fetch();
		console.log(this.images);
	}

});

var router = new Router();

exports['default'] = router;
module.exports = exports['default'];
  
});

require.register("models/image", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var Image = Backbone.Model.extend({

	validate: function validate(attrs, options) {
		if (attrs.image_url.indexOf('http://') === -1 && attrs.image_url.indexOf('https://') === -1) {
			return 'URL is invalid';
		}
	},

	idAttribute: '_id',

	defaults: function defaults() {
		username: '';
		image_url: '';
		image_caption: '';
		created_at: new Date();
	}

});

var ImageCollection = Backbone.Collection.extend({

	model: Image,
	url: 'http://tiny-lasagna-server.herokuapp.com/collections/matts_images'

});

exports['default'] = { Image: Image, ImageCollection: ImageCollection };
module.exports = exports['default'];
  
});

require.register("models/userModel", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var User = Backbone.Model.extend({

	defaults: {
		username: ''
	}

});

var UserCollection = Backbone.Collection.extend({

	model: User

});

exports['default'] = { User: User, UserCollection: UserCollection };
module.exports = exports['default'];
  
});

require.register("views/appView", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = Backbone.View.extend({

	template: JST.app,

	events: {

		'click .fa': 'showAdd',

		'click .add-image-clear-form': 'clearForm',

		'submit .add-image-form': 'addImage'

	},

	showAdd: function showAdd() {
		var form = $('.add-image-form');
		form.slideToggle();
	},

	clearForm: function clearForm(e) {},

	addImage: function addImage(e) {
		console.log('adding');
		e.preventDefault();
		var urlInput = this.$('.add-image-url').val();
		var captionInput = this.$('.add-image-caption').val();
		this.collection.create({
			username: this.username,
			image_url: urlInput,
			image_caption: captionInput
		});
	},

	initialize: function initialize(options) {
		this.username = options.user ? options.user.get('username') : '';
		this.render();
		this.listenTo(this.collection, 'invalid', function () {
			alert('got problems...');
		});
		this.listenTo(this.collection, 'update', this.render);
	},

	render: function render() {
		this.$el.html(this.template(this.collection.toJSON()));
	}

});
module.exports = exports['default'];

// e.preventDefault();
// var urlInput = this.$('.add-image-url');
// var captionInput = this.$('.add-image-caption');
// urlInput.val('');
// captionInput.val('');
  
});

require.register("views/loginView", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = Backbone.View.extend({

	template: JST.login,

	events: {
		'submit .login-form': 'login'
	},

	login: function login(e) {
		e.preventDefault();
		var username = this.$('.username').val();
		this.collection.add({ username: username });
	},

	initialize: function initialize() {
		this.render();
	},

	render: function render() {
		this.$el.html(this.template(this.collection.toJSON()));
	}

});
module.exports = exports['default'];
  
});

//# sourceMappingURL=app.js.map