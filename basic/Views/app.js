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

var Library = Backbone.Collection.extend({
	model:Book,
  url: 'http://localhost:8080/books/'
});

var myLibrary = new Library();

// ------------------ VIEW ----------------------

var LibraryView = Backbone.View.extend({

  collection: myLibrary,

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

myLibrary.fetch({
  success: function(){
    myLibrary.get({'id':2}).set('published', true)
    var myView = new LibraryView()
    //myView.remove()
  }
})
