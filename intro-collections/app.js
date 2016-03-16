Book = Backbone.Model.extend({
  urlRoot: 'http://localhost:8080/books/',
  initialize: function(){
    // define a listener for invalid model detection
    // The error parameter is apssed to the Function
    this.on("invalid", function(model, error){
      console.log(error);
    })
  },
  defaults: {
    name: 'book title',
    author: 'No one',
    year: ''
  }
})

var Library = Backbone.Collection.extend({
  model:Book,
  initialize: function(){
    // Here yo can add ypur event listeners
  }
})

var myLibrary = new Library()

// for begining collection
//myLibrary.add([{name:"the alchemist", autor:"paulo cohelo", year:"1993"},{name:"Borrachadas", autor:"Ramos ramon", year:"1985"}])

// for collection exist
myLibrary.push({name:"the alchemist", author:"paulo cohelo", year:"1993"})

myLibrary.unshift({name:"Borrachadas", author:"Ramos ramon", year:"1985"})

myLibrary.add({name:"Borrachadas", author:"Ramos ramon", year:"1989", cid:"c2"}, {merge:true})

console.log(myLibrary.models);
