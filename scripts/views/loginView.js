export default Backbone.View.extend({

	template: JST.login,

	events: {
		'submit .login-form': 'login'
	},

	login: function(e) {
		e.preventDefault();
		var username = this.$('.username').val();
		this.collection.add({username: username});
	},

	initialize: function() {
		this.render();
	},

	render: function() {
		this.$el.html(this.template(this.collection.toJSON()));
	}

});