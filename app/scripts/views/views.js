var BlogView = Backbone.View.extend({

	el: ".hero-unit",

	events: {
		
	}

	initialize: function() {
		console.log('Hey! initialize is running!');

	},

	render: function (){

	},

	

});

var blogViewOne = new BlogView ({
	el: $('.hero-unit ul'),
	});