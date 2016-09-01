$(function(){

	// Create a model for the services
	var Service = Backbone.Model.extend({

		// Will contain three attributes.
		// These are their default values

		defaults:{
			title: 'Pokemon',
			type: '',
			species: '',
			height: '',
			weight: '',
			description: '',
			image: '',
			price: 100,
			checked: false
		},

		// Helper function for checking/unchecking a service
		toggle: function(){
			this.set('checked', !this.get('checked'));
		}
	});

	// Create a collection of services
	var ServiceList = Backbone.Collection.extend({

		// Will hold objects of the Service model
		model: Service,

		// Return an array only with the checked services
		getChecked: function(){
			return this.where({checked:true});
		}
	});

	// Prefill the collection with a number of services.
	var services = new ServiceList([
		new Service({ title: 'Chespin', price: 300, type: 'grass', species: 'Spiny Nut Pokémon', height: '1′4″(0.41m)', weight: '19.8 lbs (9.0 kg)', ability:  'Bulletproof (hidden ability) / Overgrow', description: 'Chespin is a Grass type Pokémon introduced in Generation 6. It is known as the Spiny Nut Pokémon.', image: 'chespin.jpg'}),
		new Service({ title: 'Fennekin', price: 250, type: 'Fire', species: 'Fox Pokémon', height: '1′4″ (0.41m)', weight: '20.7 lbs (9.4 kg)', ability: 'Blaze / Magician (hidden ability)', description: 'Fennekin is a Fire type Pokémon introduced in Generation 6. It is known as the Fox Pokémon.', image: 'fennekin.jpg'}),
		new Service({ title: 'Meowth', price: 100, type: 'Normal', species: 'Scratch Cat Pokémon', height: '1′4″ (0.41m)', weight: '9.3 lbs (4.2 kg)', ability: 'Pickup / Technician / Unnerve (hidden ability)',  description: 'Meowth is a Normal type Pokémon introduced in Generation 1. It is known as the Scratch Cat Pokémon.', image: 'meowth.jpg'}),
		new Service({ title: 'Pancham', price: 175, type: 'Fighting', species: 'Playful Pokémon', height: '2′0″ (0.61m) ', weight: '17.6 lbs (8.0 kg)', ability: 'Iron Fist / Mold Breaker / Scrappy (hidden ability)', description: 'Pancham is a Fighting type Pokémon introduced in Generation 6. It is known as the Playful Pokémon.', image: 'pancham.jpg'}),		
		new Service({ title: 'Gogoat', price: 10, type: 'Grass', species: 'Mount Pokémon', height: ': 5′7″ (1.70m)', weight: '200.6 lbs (91.0 kg)', ability: 'Grass Pelt (hidden ability) / Sap Sipper', description: 'Gogoat is a Grass type Pokémon introduced in Generation 6. It is known as the Mount Pokémon.', image: 'gogoat.jpg'}),
		new Service({ title: 'Pickachu', price: 500, type: 'Electric', species: 'Mouse Pokémon', height: '1′4″ (0.41m)', weight: '13.2 lbs (6.0 kg)', ability: ': Lightning Rod (hidden ability) / Static',  description: 'Pikachu is an Electric type Pokémon introduced in Generation 1. It is known as the Mouse Pokémon.', image: 'pikachu.jpg'}),
		new Service({ title: 'Sunflora', price: 250, type: 'Grass', species: 'Sun Pokémon', height: '2′7″ (0.79m)', weight: '18.7 lbs (8.5 kg)', ability: 'Chlorophyll / : Early Bird (hidden ability) / Solar Power',  description: 'Sunflora is a Grass type Pokémon introduced in Generation 2. It is known as the Sun Pokémon.', image: 'sunflora.jpg'}),
		new Service({ title: 'Oshawott', price: 300, type: 'Water', species: 'Sea Otter Pokémon', height: '11′8″ (0.51m)8" (0.51m)', weight: '13 lbs (5.9 kg)', ability: 'Shell Armor (hidden ability) / Torrent', description: 'Oshawott is a Water type Pokémon introduced in Generation 5. It is known as the Sea Otter Pokémon.', image: 'oshawott.jpg'}),
		new Service({ title: 'Snivy', price: 20, type: 'Grass', species: 'Grass Snake Pokémon', height: '2′0″ (0.61m)', weight:'17.9 lbs (8.1 kg)', ability: 'Contrary (hidden ability) / Overgrow',  description: 'Snivy is a Grass type Pokémon introduced in Generation 5. It is known as the Grass Snake Pokémon.', image: 'snivy.jpg'}),
		new Service({ title: 'Fletchling', price: 200, type: 'Normal / Flying', species: 'Tiny Robin Pokémon', height: '1′0″ (0.30m)', weight: ': 3.7 lbs (1.7 kg)', ability: 'Gale Wings (hidden ability) / Big Pecks', description: 'It has a friendly nature and a beautiful chirp, but Fletchling is also known to be ferocious in battle, capable of unleashing relentless attacks.', image: 'fletchling.jpg'})
	
	]);

	// This view turns a Service model into HTML. Will create LI elements.
	var ServiceView = Backbone.View.extend({
		tagName: 'div',

		events:{
			'click': 'toggleService'
		},

		initialize: function(){

			// Set up event listeners. The change backbone event
			// is raised when a property changes (like the checked field)

			this.listenTo(this.model, 'change', this.render);
		},

		render: function(){

			// Create the HTML

			this.$el.html('<div class="col-lg-6 serv"><img src="../img/' + this.model.get('image') + '" class="pic"><input type="checkbox" value="1" name="' + this.model.get('title') + '" /> <h4 class="title">' + this.model.get('title') + '</h4><span class="serv-item"><span class="label">Price:</span> $' + this.model.get('price') + '</span><span class="serv-item"><span class="label">Type:</span> ' + this.model.get('type') + '</span><span class="serv-item"><span class="label">Species:</span> ' + this.model.get('species') + '</span><span class="serv-item"><span class="label">Height:</span> ' + this.model.get('height') + '</span><span class="serv-item"><span class="label">Weight:</span> ' + this.model.get('weight') + '</span><span class="serv-item"><span class="label">Ability:</span> ' + this.model.get('ability') + '</span><span class="serv-item"><span class="label">Description:</span> ' + this.model.get('description') +'</span></div>');
			this.$('input').prop('checked', this.model.get('checked'));

			// Returning the object is a good practice
			// that makes chaining possible
			return this;
		},

		toggleService: function(){
			this.model.toggle();
		}
	});

	// The main view of the application
	var App = Backbone.View.extend({

		// Base the view on an existing element
		el: $('#main'),

		initialize: function(){

			// Cache these selectors
			this.total = $('#total span');
			this.list = $('#services');

			// Listen for the change event on the collection.
			// This is equivalent to listening on every one of the 
			// service objects in the collection.
			this.listenTo(services, 'change', this.render);

			// Create views for every one of the services in the
			// collection and add them to the page

			services.each(function(service){

				var view = new ServiceView({ model: service });
				this.list.append(view.render().el);

			}, this);	// "this" is the context in the callback
		},

		render: function(){

			// Calculate the total order amount by agregating
			// the prices of only the checked elements

			var total = 0;

			_.each(services.getChecked(), function(elem){
				total += elem.get('price');
			});

			// Update the total price
			this.total.text('$'+total);

			return this;
		}
	});

	new App();
	

  $( function() {
    $( "#dialog" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
 
    $( "#readme" ).on( "click", function() {
      $( "#dialog" ).dialog( "open" );
    });
  } );

});