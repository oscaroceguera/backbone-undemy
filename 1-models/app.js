// create a model
var myBook = Backbone.Model.extend({
	initialize: function(){
	   this.on("change", function(model,error){
       //console.log('the model has change');
     })
	},
	// attributes
	name: "No Title",
	author: "No one",
	year: "No year"
});

var newBook = new myBook({
  name: "Harry Potter",
  author: "J.K. Rowling",
  year: 2000
});


// newBook.set({'year':1995},{silent: true})

newBook.set({'year':1995})
newBook.set({'name':'The animal farm'})

if (newBook.hasChanged("name")){
  console.log('the name of the book has changed');
}

console.log(JSON.stringify(newBook.changed));
