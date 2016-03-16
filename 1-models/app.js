// create a model
Book = Backbone.Model.extend({
	initialize: function(){
    this.on("invalid", function(model, error){
      console.log(error);
    })
	},
  validate: function(attrs){
    if(attrs.name == ""){
      return 'Please enter a title for the book'
    }
    if(attrs.author == ""){
      return "please enter an author for the book"
    }
    if(attrs.year > 2015){
      return "please enter a valid year"
    }
  },
	// the defaults are the initial values of your
  // attributes until they are changed by the new model
	defaults: {
    name: "No Title",
  	author: "No one",
  	year: "No year"
  }
});


var newBook = new Book();

newBook.set({"name":""}, {validate:true})
newBook.set({"year":2020}, {validate:true})

console.log("Is this model valid? ", newBook.isValid());
