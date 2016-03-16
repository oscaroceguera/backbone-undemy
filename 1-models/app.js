// create a model
var myBook = Backbone.Model.extend({
	initialize: function(){
		console.log("The book is initialized");
	},
	// attributes
	Title: "No Title",
	Author: "No one",
	Year: "No year"
});

var newBook = new myBook({
  Title: "Harry Potter",
  Author: "J.K. Rowling",
  Year: 2000
});

console.log("thie title of the new book is: ", newBook.get("Title"));
console.log('the published year is : ', newBook.get('Year'));

newBook.set("Year", 1999)

console.log('the published year is : ', newBook.get('Year'));

newBook.unset("Year")

console.log('the published year is : ', newBook.get('Year'));
