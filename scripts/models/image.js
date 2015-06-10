var Image = Backbone.Model.extend({

	validate: function(attrs, options) {
		if(attrs.image_url.indexOf('http://') === -1 && attrs.image_url.indexOf('https://') === -1) {
			return "URL is invalid";
		}
	},

	idAttribute: '_id',

	defaults: function() {
		username: '';
		image_url: '';
		image_caption: '';
		created_at: new Date();
	},

});

var ImageCollection = Backbone.Collection.extend({

	model: Image,
	url: 'http://tiny-lasagna-server.herokuapp.com/collections/matts_images'

});

export default {Image, ImageCollection};