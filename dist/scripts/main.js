
var BlogEntry = Backbone.Model.extend ({

	idAttribute: '_id',

	defaults: {
	  title: "", // String
	  content: "", // String
	  date: "", // Date
	  status: "", // String
	  author: "", // String
	  tags: [] // Array of Strings
	}
	// idAttribute:('_id'),
	// initialize:function(){
	// 	var title = this.get('title');
		// console.log(name + ' has been added to the list.');
	// 	console.log('Hey! initialize is running!');
	// }
});


//A blog entry example:

// var blogEntryOne = new BlogEntry({
// 	title: "So Lucky I Got To Make A Blog",
// 	content: "Today I got to make a blog. Not just a blog post, or even a blog instance- a whole blog app!",
// 	date: "July 14, 2014",
// 	author: "Taylor Smith",
// 	tags: ["Neato Frito", "Making a blog", "Wowzers!"],
// })


	var BlogCollection = Backbone.Collection.extend ({
		model: BlogEntry,
		url: "http://tiy-atl-fe-server.herokuapp.com/collections/taylorSmithBlog",
});
var BlogView = Backbone.View.extend({

	el: ".hero-unit",

	events: {
		'submit #newBlogPost_input': 'newPost'
	}

	initialize: function() {
		this.render();
		this.collection.on('change', this.render, this);
		// this.collection.on('destroy', this.render, this);
	},

	render: function (){

	},

	newPost: function(e){
		event.preventDefault();
    event.stopPropagation();
	}

});

var blogViewOne = new BlogView ({
	el: $('.hero-unit ul'),
	});

var post_list = new BlogCollection();

post_list.fetch().done( (){


})