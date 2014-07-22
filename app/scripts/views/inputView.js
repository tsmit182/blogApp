var InputView = Backbone.View.extend({

	el: ".hero-unit",

	events: {
		'submit #newBlogPost_input': 'newPost'
	}

	initialize: function() {
		this.render();
		this.collection.on('change', this.render, this);
		this.collection.on('destroy', this.render, this);
	},

	render: function (){

	},

	newPost: function(e){
		event.preventDefault();
    event.stopPropagation();
	}

});

var blogViewOne = new InputView ({
	el: $('.hero-unit ul'),
	});