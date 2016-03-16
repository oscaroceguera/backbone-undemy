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
myBook.set('id', 4)

myBook.set("name", "OSCAR OCEGUERA")
myBook.save()
