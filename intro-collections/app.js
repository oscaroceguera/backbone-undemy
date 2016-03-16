Book = Backbone.Model.extend({
  urlRoot: 'http://localhost:8080/books/',
  initialize: function(){
    // define
  },
  defaults: {
    name: 'book title',
    author: 'No one',
    year: ''
  }
})

var myBook = new Book()

myBook.set("id",1)

myBook.fetch({
  success: function(model, res, options){
    console.log(model.get("name"));
  },
  error: function(err){
    console.log(err);
  }
})
