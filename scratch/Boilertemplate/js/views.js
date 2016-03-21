// VIEWS
// var SongView = Backbone.View.extend({
// 	tagName: 'span',
// 	className: 'song',
// 	id: '123',
// 	attributes:{
// 		"data-genre": 'jazz'
// 	},
// 	render: function(){
// 		this.$el.html("hola")
// 		return this;
// 	}
// })
//
// var songView = new SongView();
//
// $('#container').html(songView.render().$el);

// ·······································
// PASING DATA FOR THE VIEWv
var Song = Backbone.Model.extend();

var Songs = Backbone.Collection.extend({
	model: Song
})

var SongView = Backbone.View.extend({
	tagName: 'li',

	render: function(){
		this.$el.html(this.model.get('title'))
		return this;
	}
});

var SongsView = Backbone.View.extend({
	render: function(){
		var self = this;
		this.model.each(function(song){
			var songView = new SongView({ model: song});
			self.$el.append(songView.render().$el)
		})
	}
})

var songs = new Songs([
	new Song({ title: "Blue in Green" }),
	new Song({ title: "So What" }),
	new Song({ title: "All blues" })
]);

var songsView = new SongsView({el: '#songs', model: songs});
songsView.render();
