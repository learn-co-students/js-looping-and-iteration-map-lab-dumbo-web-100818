function lowerCaseDrivers(arr) {
	return arr.map(function(element) {
		return element.toLowerCase()
	})
}

function nameToAttributes(arr) {
	return arr.map(function(element) {
		const userFirst = element.split(' ')[0];
	    const userLast = element.split(' ')[1];

		return { firstName: userFirst, lastName: userLast }
	})
}

function attributesToPhrase(arr) {
	return arr.map(function(element) {
		return `${element.name} is from ${element.hometown}`
	})
}