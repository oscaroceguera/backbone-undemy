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

var Library = Backbone.Collection.extend({
	model:Book,
  url: 'http://localhost:8080/books/',
	initialize: function(){
		this.on("remove",function(removedModel,models,options){
			console.log("We removed model at index " + options.index);
		})
	}
});

var myLibrary = new Library();

// myLibrary.add([{name:"The Alchemist",author:"Paulo Coehlo",year:"1993"},{name:"Lord of Flies",author:"William Goodwing",year:"1953"}]);

var sampleBook = new Book({
	name: "Sample Book",
	author: "Sample Author",
	year: "2003"
})

myLibrary.add(sampleBook);

myLibrary.push({name:"The Alchemist",author:"Paulo Coehlo",year:"1993"});
myLibrary.push({name:"Lord of Flies",author:"William Goodwing",year:"1953"});
myLibrary.push({name:"Lord of Flies 2",author:"William Goodwing",year:"1953"});

myLibrary.forEach(function(model){
  model.save()
})

var myModel = new Book({
  name: "Created and saved book",
  author: "ahmed",
  year: 2015
})

myLibrary.create(myModel)

myLibrary.fetch({
  success: function(){
    console.log('Collection retreived from the server');
  },
  error: function(){
    console.log('An error happend');
  }
})

console.log(myLibrary.models);
