// Code your solution in this file.
function lowerCaseDrivers(givenArray) {
  return givenArray.map(function (name) {
    return name.toLowerCase();
  })
}

function attributesToPhrase(givenArray) {
  return givenArray.map(function(person){ return `${person.name} is from ${person.hometown}` });
}

function nameToAttributes(givenArray) {
  return givenArray.map(function (driver) {
    const fName = driver.split(' ')[0];
    const lName = driver.split(' ')[1];

    return { firstName: fName, lastName: lName};

  });
}
