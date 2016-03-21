var com = com || {}
com.eduonix = com.eduonix || {}
com.eduonix.router = com.eduonix.router || {}
com.eduonix.router.AppRouter = Backbone.Router.extend({
  searchModel: null,
  initialize: function(options){
    var self = this
    self.searchModel = options.searchModel
    self.listenTo(self.searchModel, 'change:query', self.navigateToSearch)
  },
  navigateToSearch: function(){
    this.navigate("search/" + model.get('query'), {trigger:true})
  },
  routes: {
    'search/:query' : 'search'
  },
  search: function(query){
    var self = this
    if(self.searchModel.get("query") != query){
      self.searchModel.set("query", query, {silent:true})
    }
    self.searchModel.fetch({
      success: function(model){
        var resultsView = new com.eduonix.view.ResultsView({model:model})
      },
      error: function(err){
        alert('An error')
      }
    })
  }
})
