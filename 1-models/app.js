// create a model
Book = Backbone.Model.extend({
  urlRoot: "https://emmett-api.herokuapp.com/api/admin/users",
	initialize: function(){
    this.on("invalid", function(model, error){
      console.log(error);
    })
	},
	// the defaults are the initial values of your
  // attributes until they are changed by the new model
	defaults: {
    name: "No Title",
  	author: "No one",
  	year: "No year"
  },
  validate: function(attrs){
    if(attrs.author == "No one"){
      return "please enter the author name"
    }
  }
});

var myBook = new Book();
myBook.set("name", "king of flies")

myBook.save()
