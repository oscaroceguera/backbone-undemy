var person = {
	name: "Mosh",

	walk: function(){
		this.trigger("walking", {
			speed: 1,
			startTime: '80:80'
		});
	}
}

_.extend(person, Backbone.Events);

// on or once
person.on('walking', function(e){
	console.log('person is walking');
	console.log('Event args', e);
})

//person.off('walking')
person.walk()
person.walk()
