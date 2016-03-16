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

console.log('--- get id with cid  ---');
console.log(myLibrary.get("c1"));

console.log('--- Index ----');
console.log(myLibrary.at(1));

console.log('--- loop ---');
for(var i = 0; i < myLibrary.length; i++){
  console.log(myLibrary.at(i));
  // console.log(myLibrary.at(i).get('name'));
}

console.log('--- Loop with underscore.js ---');
myLibrary.forEach(function(model){
  //console.log(model);
  console.log(model.get('author'));
})

console.log('--- pluck underscore---');
console.log(myLibrary.pluck("name"));

console.log('--- Where underscore ---');
console.log(myLibrary.where({name:'The Alchemist'}));
console.log(myLibrary.where({year:'1993'}));

console.log('--- findwhere underscore ---');
console.log(myLibrary.findWhere({name:"Lord of Flies"}));
console.log(myLibrary.findWhere({year:"1953"}));

console.log('--- GroupBy underscore ---');
console.log(myLibrary.groupBy({year:'1953'}));
