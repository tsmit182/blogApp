var BlogRouter = Backbone.Router.extend({

  routes: {
    '' : 'home',
    'post/:id' : 'post',
  },

  home: function () {
    new InputView({ collection: post_list });
  },

  post: function (id) {
    new OutputView({ postid: id, collection:  });
  },

});