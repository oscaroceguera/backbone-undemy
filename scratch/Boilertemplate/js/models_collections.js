// INHERITANCE (HERENCIA)

// var Animal = Backbone.Model.extend({
// 	walk: function(){
// 		console.log('Animal walking...');
// 	}
// })
//
// var Pez = Animal.extend({
// 	walk: function(){
// 		console.log('El pez no caminan');
// 	}
// })
//
// var Dog = Animal.extend({
// 	walk: function(){
// 		Animal.prototype.walk.apply(this);
// 		Pez.prototype.walk.apply(this)
// 		console.log("Dog walking...");
// 	}
// });
//
// var dog = new Dog();
// dog.walk();

// ····················································

// COLLECTIONS

// var Song = Backbone.Model.extend();
//
// var Songs = Backbone.Collection.extend({
// 	model: Song
// });

// >>> PARTE UNO
// var songs = new Songs([
// 	new Song({title: "Song 1"}),
// 	new Song({title: "Song 2"}),
// 	new Song({title: "Song 3"}),
// 	new Song({title: "Song 4"})
// ]);
//
// songs.add(new Song({title: "Cancion español"}))
//
// console.log(songs.at(0))
//
// songs.remove(songs.at(0))
// console.log(songs.at(0))

// >>> PARTE DOS
// var songs = new Songs();
//
// songs.add(new Song({ title: 'song 1', genre: 'Jazz', downloads: 110 }, {at: 0}))
//
// songs.push(new Song({ title: 'song 2', genre: 'Jazz', downloads: 90}));
// songs.push(new Song({ title: 'song 3', genre: 'Jazz', downloads: 500}));
//
// var jazzSongs = songs.where({ genre: 'Jazz' })
//
// var frirstJAzzzSong = songs.findWhere({ genre: "Jazz" });
//
// console.log("jazz songs ", jazzSongs);
// console.log('first jazz song', frirstJAzzzSong);
//
// var filteredSongs = songs.where({ genre: 'Jazz', title: 'song 2' })
// console.log('FilteredSongs ', filteredSongs);
//
// var topDownloads = songs.filter(function(song){
// 	return song.get("downloads") > 100;
// })
//
// console.log('Top Downloads', topDownloads);
//
// songs.each(function(song){
// 	console.log(song);
// })

// >>> PARTE TRES (MINI PROJECT)
// Create a Backbone collection for the Vehicle model you created in the last project.
// Add the following cars inside the collection:
// * car1: { registrationNumber = “XLI887”, colour = “Blue” }
// * car2: { registrationNumber = “ZNP123”, colour = “Blue” }
// * car3: { registrationNumber = “XUV456”, colour = “Gray” }


var Vehicle = Backbone.Model.extend();
var Vehicles = Backbone.Collection.extend({
	model: Vehicle
})

var vehicles = new Vehicles([
	new Vehicle({ registrationNumber : 'XLI887', color : 'Blue' }),
	new Vehicle({ registrationNumber : 'ZNP123', color : 'Blue' }),
	new Vehicle({ registrationNumber : 'XUV456', color : 'Gray' })
])

// Find all the Blue cars and log them in the console.
var blueCars = vehicles.where({color:'Blue'})
console.log(blueCars);

// Find the car with the registration number XLI887 and log it in the console
var xli887 = vehicles.where({registrationNumber: 'XLI887'})
console.log(xli887);
//Remove this car from the collection.
vehicles.remove(xli887)
console.log(vehicles);

//Convert the collection to a JSON object and log it in the console.
console.log(vehicles.toJSON());

//Iterate the collection and log each car in the console
vehicles.each(function(car){
	console.log(car);
})
