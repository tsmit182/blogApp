
var BlogEntry =  Backbone.Model.extend({
	defaults: {
	  "title": "", // String
	  "content": "", // String
	  "date": "", // String
	  "status": "", // String
	  "author": "", // String
	  "tags": [] // Array of Strings
	}
	idAttribute:('_id'),
	initialize:function(){
		var title = this.get('title');
		// console.log(name + ' has been added to the list.');
		console.log('Hey! initialize is running!');
	}
});

var blogEntryOne = new BlogEntry({
	title: "So Lucky I Got To Make A Blog",
	content: "Today I got to make a blog. Not just a blog post, or even a blog instance- a whole blog app!",
	date: "July 14, 2014",
	author: "Taylor Smith",
	tags: ["Neato Frito", "Making a blog", "Wowzers!"],
})