if (Meteor.isClient) {

Meteor.startup(function() {  
		 GoogleMaps.load();
});

Template.map.helpers({
	mapOptions: function(){
		if (GoogleMaps.loaded()) {	
			return {
				center: new google.maps.LatLng(0,0),
				zoom: 15
			};
		}
	}
});

Template.map.onCreated(function() {
	  // We can use the `ready` callback to interact with the map API once the map is ready.
	 GoogleMaps.ready('map', function(map) {
		    var geo = new Geolocation.latLng();
		    var latLng = new google.maps.LatLng(geo.lat, geo.lng);
		    map.instance.setCenter(latLng);

	    // Add a marker showing current location to the map once it's ready
		currentMarker = new google.maps.Marker({
	      	position: map.options.center,
	      	map: map.instance,
	      	icon: {
			  path: google.maps.SymbolPath.CIRCLE,
				    scale: 5,
				    strokeWeight: 1,
				    fillColor: '#746f70',
				    strokeColor: '#746f70',
				    fillOpacity: 1,			
			    },
		})
	})	
});		
}


if (Meteor.isServer) {
}