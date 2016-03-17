var com = com || {}
com.eduonix = com.eduonix || {}
com.eduonix.view = com.eduonix.view || {}
com.eduonix.view.SearchView = Backbone.View.extend({
  el: "search",
  model: null,
  events: {
    'click #searchbutton': 'runSearch'
  },
  initialize: function(options){
    var self = this;
    self.model = options.model
  },
  runSearch: function(e){
    var self = this
    query = $('#searchbox').val()
    e.preventDefault()

    self.model.set('query', '', {silent:true})
    self.model.set('query', query)
  }
})
