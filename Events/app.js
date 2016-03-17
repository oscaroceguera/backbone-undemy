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
  render: function(payload){
    console.log('This is the render function. The payload is ', payload.data);
  }
})

var myView = new BookView();

myView.listenTo(myBook, "change:name", myView.render)

myBook.trigger("change:name", {data: "this is the payload"})

function customHandler(){
  console.log('we have ran out of stock');
}

Backbone.on("myBook:empty", customHandler)

myBook.on("change",function(){
  if(myBook.get('stock') == 0 && myBook.get('reserve') == 0){
    Backbone.trigger('myBook:empty', {})
  }
})
myBook.set("reserve",0)
myBook.set("stock",0)
