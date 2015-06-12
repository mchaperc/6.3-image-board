this["JST"] = this["JST"] || {};
this["JST"]["app"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "	<div class=\"stored-image-container\">\n		<img src=\""
    + alias3(((helper = (helper = helpers.image_url || (depth0 != null ? depth0.image_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"image_url","hash":{},"data":data}) : helper)))
    + "\" alt=\"\" class=\"stored-image-image\">\n		<div class=\"stored-image-caption-container\">\n			<p class=\"stored-image-caption\">"
    + alias3(((helper = (helper = helpers.image_caption || (depth0 != null ? depth0.image_caption : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"image_caption","hash":{},"data":data}) : helper)))
    + "</p>\n			<p class=\"stored-image-username\">Image stored by: "
    + alias3(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"username","hash":{},"data":data}) : helper)))
    + "</p>\n		</div>\n	</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<header class=\"show-add\">\n	<i class=\"fa fa-plus-circle\"></i>\n</header>\n\n<form class=\"add-image-form view-form\">\n	<input type=\"text\" class=\"add-image-url\" placeholder=\"Enter an image URL\" required autofocus>\n	<input type=\"text\" class=\"add-image-caption\" placeholder=\"Enter a caption for the image\">\n	<div class=\"buttons\"></div>\n		<button type=\"reset\" class=\"add-image-clear-form\">Cancel</button>\n		<button type=\"submit\" class=\"add-image-submit\"><i class=\"fa fa-image\"></i> Add Image</button>\n	</div>\n</form>\n\n<section class=\"stored-images\">\n"
    + ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</section>";
},"useData":true});
this["JST"]["index"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "";
},"useData":true});
this["JST"]["login"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<form class=\"login-form\">\n	<input class=\"username\" type=\"text\" placeholder=\"Username\" required>\n	<input class=\"login-submit\" type=\"submit\">\n</form>";
},"useData":true});