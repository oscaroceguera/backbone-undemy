define([
	'jquery',
	'underscore',
	'backbone',
	'models/song',
	'views/songView'], function(_, Backbone, Song, SongView){

		var song = new Song({title: 'blue in green'})

		var songView = new SongView({ el; '#container', model: song})
		songView.render()

		



});
