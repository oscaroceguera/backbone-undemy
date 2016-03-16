Book = Backbone.Model.extend({
	urlRoot: "http://localhost:8080/books/",
	initialize: function(){
		//Define a listener for invalid model detection. The error parameter is passed to the function
		this.on("invalid",function(model,error){
			console.log(error);
		});
	},
	//The defaults are the initial values of your attributes until they are changed by the new model
	defaults: {
		name: 'Book title',
		author: 'No one',
		year: ""
	}
});

var myBook = new Book();
var secondBook = new Book();

function nameHandler(model){
  console.log('The name of book has changed');
}

function anotherNameHandler(model){
  console.log('This is another name handler');
}
//
// myBook.once("change:name", anotherNameHandler)
//
// myBook.set("name","The Hunger Games")
// myBook.set("name","Gassparin")
// secondBook.on('change:name', anotherNameHandler)
// secondBook.set('name', 'Harry Potter')

var BookView = Backbone.View.extend({
  el: "div",
  render: function(){
    console.log('This is the render function');
  }
})

var myView = new BookView();
myView.listenTo(myBook, "change:author", myView.render)
myBook.set("author", "Aurthur Milley")
myView.stopListening(myBook)
myBook.set("author", "Carlos Oceguera")
