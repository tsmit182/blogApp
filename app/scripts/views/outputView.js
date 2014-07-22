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