
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

    var template = Handlebars.compile($('#blogInputHere').html());
    var rendered = template(single.toJSON());
	},

	newPost: function(e){
		event.preventDefault();
    event.stopPropagation();
	}

});

var blogViewOne = new InputView ({
	el: $('.hero-unit ul')
	});
var OutputView = Backbone.View.extend({
	
	el: #blogPost_output,

	events: {
		'click #edit' : 'editPost'
		'click #delete' : 'deletePost'
	}

	editPost: function (e) {
    event.preventDefault();
    event.stopPropagation();
    var editable = this.collection.get($('.post_id').val());
	}

	deletePost: function(e) {
		event.preventDefault();
    event.stopPropagation();
	}

});

blogOutputView = new OutputView ({

});
var post_list = new BlogCollection();

post_list.fetch().done( function (){

	window.blog_router = new BlogRouter();
	Backbone.history.start();
});

$('#newBlogPost_input').on('submit', function (e) {

  event.preventDefault();

  var updating_entry = new BlogEntry({
  	title: $('.postTitle'),
  	date: $('.postDate'),
  	content: $('.postContent'),
  	description: $('.postDescription'),
  	author: $('postAuthor')
  });

  post_list.add(updating_entry).save();

  $(this).trigger('reset');

});