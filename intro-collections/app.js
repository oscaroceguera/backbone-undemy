// REMOVING MODELS FROM COLLECTION
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
    this.on("remove", function(removedModel, models, options){
      console.log("we remover model at index", options.index);
    })
  }
})

var myLibrary = new Library()

// for begining collection
//myLibrary.add([{name:"the alchemist", autor:"paulo cohelo", year:"1993"},{name:"Borrachadas", autor:"Ramos ramon", year:"1985"}])

// for collection exist
myLibrary.push({name:"the alchemist", author:"paulo cohelo", year:"1993"})

myLibrary.push({name:"Borrachadas", author:"Ramos ramon", year:"1985"})

myLibrary.add({name:"Borrachadas", author:"Ramos ramon", year:"1989", cid:"c2"}, {merge:true})

// new model
var sampleBook = new Book({
  name: 'Sample Book',
  author: 'Sample Author',
  year: '2003'
})

myLibrary.add(sampleBook)

console.log(myLibrary.models);

// Remove the last
//myRemovedModel = myLibrary.pop()

// revove the first
myRemovedModel = myLibrary.shift()

console.log(myRemovedModel);
