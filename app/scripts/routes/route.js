var BlogRouter = Backbone.Router.extend({

  routes: {
    '' : 'home',
    'post/:id' : 'post',
  },

  home: function () {
    new BlogView({ collection: whiskey_list });
  },

  post: function (id) {
    new WhiskeyEditView({ postid: id, collection: whiskey_list });
  },

});