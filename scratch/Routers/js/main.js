var ArtistsView = Backbone.View.extend({
	render: function(){
		this.$el.html("ARTISTS VIEW");
		return this;
	}
})


var AlbumsView = Backbone.View.extend({
	render: function(){
		this.$el.html("ALBUMS VIEW");
		return this;
	}
})


var GenresView = Backbone.View.extend({
	render: function(){
		this.$el.html("GENRES VIEW");
		return this;
	}
})

var AppRouter = Backbone.Router.extend({
	routers: {
		'abums': 'viewAlbums',
		'abums/:album': 'viewAlbumsById',
		'artists': 'viewArtists',
		'genres': 'viewGenres',
		'*other': 'defaultRoute'
	},

	viewAlbums: function(){
		var view = new AlbumsView({el: '#container'})
		view.render()
	},

	viewAlbumsById: function(albumId){
		var view = new AlbumsView({el: '#container'})
		view.render()
	}
})
