// create a model
Book = Backbone.Model.extend({
  urlRoot: "https://emmett-api.herokuapp.com/api/admin/users",

	// the defaults are the initial values of your
  // attributes until they are changed by the new model
	defaults: {
    name: "No Title",
  	author: "No one",
  	year: "No year"
  },
});

var myBook = new Book();
myBook.set("id", 1)

myBook.fetch({
  success: function(model, res, options){
    console.log(model.get("name"));
  },
  error: function(err){
    console.log(err);
  }
})
