function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}

function getMinOfArray(numArray) {
  return Math.min.apply(null, numArray);
}

function normalize(input) {
	var normalized = []
	var max = getMaxOfArray(input);
	var min = getMinOfArray(input);
	console.log(max,min)
	// Move everything into the positive realm if we have to
	if (min < 0) {
		addmin = Math.abs(min)
		for (var i = input.length - 1; i >= 0; i--) {
			input[i] += addmin
		}
		min = getMinOfArray(input);
	}
	// Now let's normalize
	for (var i = input.length - 1; i >= 0; i--) {
		// console.log(input[i], (input[i] - min) / (max - min))
		normalized.push((input[i] - min) / (max - min));
	}
	return normalized
}



// Taken from https://github.com/HexaCubist/MeetingHall/blob/master/scripts/helper/utils.js - bunch of code for general use mathing stuff.
Object.defineProperty(Number.prototype, "toRadians", {
	enumerable: false,
	value: function() {
		return this * Math.PI / 180;
	}
});
Object.defineProperty(Number.prototype, "toDegrees", {
	enumerable: false,
	value: function() {
		return this * (180 / Math.PI);
	}
});

function calcdist([lat1, lon1], [lat2, lon2]) {
	// Calculate distance between two latlongs
	var R = 6378137; // metres
	var phi1 = lat1.toRadians();
	var phi2 = lat2.toRadians();
	var changeinphi = (lat2-lat1).toRadians();
	var changeinlambda = (lon2-lon1).toRadians();

	var a = Math.sin(changeinphi/2) * Math.sin(changeinphi/2) +
		   Math.cos(phi1) * Math.cos(phi2) *
		   Math.sin(changeinlambda/2) * Math.sin(changeinlambda/2);
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

	var d = R * c;
	return d;
}

function calcbearing([lat1, lon1], [lat2, lon2]) {
	var phi1 = lat1.toRadians();
	var phi2 = lat2.toRadians();
	var lambda1 = lon1.toRadians();
	var lambda2 = lon2.toRadians();
	var changeinphi = (lat2-lat1).toRadians();
	var changeinlambda = (lon2-lon1).toRadians();

	var y = Math.sin(lambda2-lambda1) * Math.cos(phi2);
	var x = Math.cos(phi1)*Math.sin(phi2) -
		Math.sin(phi1)*Math.cos(phi2)*Math.cos(lambda2-lambda1);
	var brng = Math.atan2(y, x).toDegrees();
	return brng;
}

function averageloc(locations) { // Locations in the format of [[lat1, lon1], [lat2, lon2]...etc]
	// Calculation Concept sourced from http://stackoverflow.com/a/491784/3902950
	
	// Latitude Calculations
	y = 0
	x = 0
	for (var i = 0; i < locations.length; i++) {
		lat = locations[i][0].toRadians();
		x += Math.cos(lat)
		y += Math.sin(lat)
	}
	average_lat = Math.atan2(y, x).toDegrees();
	
	// Longitude Calculations
	y = 0
	x = 0
	for (var i = 0; i < locations.length; i++) {
		long = locations[i][1].toRadians();
		x += Math.cos(long)
		y += Math.sin(long)
	}
	average_long = Math.atan2(y, x).toDegrees();
	return([average_lat, average_long])
}

function markpoint([lat,long], label) {
	mapMarkers.push(
		new google.maps.Marker({
			position: {
				lat: lat,
				lng: long
			},
			label: {
				text: label,
				color: "white"
			}

		})
	);
	setMarkers();
}