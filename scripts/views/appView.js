export default Backbone.View.extend({

	template: JST.app,

	events: {

		'click .fa': 'showAdd',

		'click .add-image-clear-form': 'clearForm',

		'click .add-image-submit': 'addImage'

	},

	showAdd: function() {
		var form = $('.add-image-form');
		form.slideToggle();
	},

	clearForm: function(e) {
		e.preventDefault();
		var urlInput = this.$('.add-image-url');
		var captionInput = this.$('.add-image-caption');
		urlInput.val('');
		captionInput.val('');
	},

	addImage: function(e) {
		e.preventDefault();
		var urlInput = this.$('.add-image-url').val();
		var captionInput = this.$('.add-image-caption').val();
		this.collection.create({
			username: this.username,
			image_url: urlInput,
			image_caption: captionInput
		});
	},

	initialize: function(options) {
		this.username = options.user ? options.user.get('username') : '';
		this.render();
		this.listenTo(this.collection, 'update', this.render);
	},

	render: function() {
		this.$el.html(this.template(this.collection.toJSON()));
	}

});