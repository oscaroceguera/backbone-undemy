// ------------------ MODEL ----------------------

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

// ------------------ COLLECTION ----------------------


// ------------------ VIEW ----------------------

var LibraryView = Backbone.View.extend({
  el: 'ul',
  id: 'book-list',
  initialize: function(){
    this.render()
  },
  events: {
    'click li': function(){
      alert('click me')
    }
  },
  template: Handlebars.compile($("#books-template").html()),
  render: function(){
    var self = this
    var output = self.template({'library': this.collection.toJSON()})
    this.$el.append(output)
    return self
  }
})

// ------------------ ROUTER ----------------------
var LibraryRoute = Backbone.Router.extend({
  routes: {
    "book/:author(/:year)": "displaybook",
    //"books/book:id": "displaySingleBook",
    "books/*path": "displayArbitrary",
    "":"homepage",
    "*default":"defaultRoute"
  },
  homepage: function(){
    console.log('Yo reached the homepage of the application');
  },
  defaultRoute: function(){
    console.log('Thepage you are lookin for could not be found');
  },
  displaybook : function(author, year){
    if(year != null){
      console.log("displaybook book for author" + author + "in th eyear" + year);
    } else{
      console.log("displaybook book for author" + author);

    }
  },
  displaySingleBook: function(id){
    console.log('Dispalyin book with ID : ', id);
  },
  displayArbitrary : function(path){
      path = path.split("/")
      console.log("first segment is : ",path[0], "And secon segment is : ", path[1]);
  }
})

var router = new LibraryRoute()
Backbone.history.start()
