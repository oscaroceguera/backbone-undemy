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
myBook.on("change:name change:year", function(model){
  console.log('Changes in Model ', model.cid);
})

myBook.set("name","The Hunger Games")
myBook.set("year","2013")
console.log(myBook);
