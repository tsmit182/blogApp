var BlogView = Backbone.View.extend({

		initialize: function() {
		console.log('Hey! initialize is running!');

	},

});

var blogViewOne = new BlogView ({
	el: $('.hero-unit ul'),
	});