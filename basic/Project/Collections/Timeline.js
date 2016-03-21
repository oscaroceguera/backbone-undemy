// Create namespaces
var com = com || {}
com.eduonix = com.eduonix || {}
com.eduonix.collection = com.eduonix.collection || {}
com.eduonix.collection.Timeline = Backbone.Collection.extend({
  model: com.eduonix.model.Tweet,

  url: 'http://localhost:8080/timeline', 

  initialize : function(){

  }
})
