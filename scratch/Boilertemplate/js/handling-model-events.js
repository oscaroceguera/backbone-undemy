var Song = Backbone.Model.extend({
	defaults: {
		listeners: 0
	}
});

var SongView = Backbone.View.extend({
	initialize: function(){
		this.model.on('change', this.onModelChange, this)
		this.model.on('change', this.render, this)
	},

	onModelChange: function(){
		this.$el.addClass('someClass')
	},

	render: function(){
		this.$el.html(this.model.get('title') + " - Listeners: " + this.model.get('listeners'))
		return this;
	}
});

var song = new Song({ title: 'Blue in Green' });

var sonView = new SongView({ el: '#songs', model: song })
sonView.render()
