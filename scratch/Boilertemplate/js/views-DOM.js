var Song = Backbone.Model.extend();

var SongView = Backbone.View.extend({
	events: {
		'click': 'onclick',
		'click .bookmark': 'onclickbookmark'
	},

	onclick: function(){
		console.log('Listen clicked');
	},

	onclickbookmark: function(e){
		e.stopPropagation();
		
		console.log('onclickbookmark');
	},

	render: function(){
		this.$el.html(this.model.get('title') + " <button>Listen</button> <button class='bookmark'>Bookmark</button>")
		return this;
	}
});

var song = new Song({ title: 'Blue in Green' });

var sonView = new SongView({ el: '#songs', model: song })
sonView.render()
