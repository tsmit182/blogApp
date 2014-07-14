	var BlogCollection = Backbone.Collection.extend ({
		model: BlogEntry,
		url: "http://tiy-atl-fe-server.herokuapp.com/collections/taylorSmithBlog",
});