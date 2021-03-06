var Vehicle = Backbone.Model.extend();

var Vehicles = Backbone.Collection.extend({
	model: Vehicle
});

var VehicleView = Backbone.View.extend({
	tagName: 'li',

	className: 'vehicle',

	events: {
		'click .delete': 'onDelete'
	},

	onDelete: function(){
		this.remove()
	},

	render: function(){
		this.$el.html(this.model.get('registrationNumber') + ' <button class="delete">Delete</button>');
		this.$el.attr('data-color', this.model.get('color'));
		return this;
	}
});

var VehiclesView = Backbone.View.extend({
	tagName: 'ul',

	render: function(){
		var self = this;
		this.model.each(function(vehicle){
			var vehicleView = new VehicleView({ model: vehicle});
			self.$el.append(vehicleView.render().$el);
		})
	}
})

var vehicles = new Vehicles([
	new Vehicle({id: 12422, registrationNumber : 'XLI887', color : 'Blue' }),
	new Vehicle({id: 984783, registrationNumber : 'ZNP123', color : 'Peru' }),
	new Vehicle({id: 938648, registrationNumber : 'XUV456', color : 'Gray' })
])

var vehiclesView = new VehiclesView({ el: '#vehicles', model: vehicles});
vehiclesView.render()
