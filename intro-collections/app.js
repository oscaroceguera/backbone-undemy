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

myBook.set("id",3)

myBook.destroy({
  success: function(){
    console.log('Delete successfully');
  },
  error: function(){
    console.log('An error ocurred');
  }
},{wait: true});
