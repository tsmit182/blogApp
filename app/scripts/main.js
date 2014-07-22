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