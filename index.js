// Code your solution in this file.
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function lowerCaseDrivers(drivers){
  const newArray = drivers.map(function (driver){
    return driver.toLowerCase();
  });
  return newArray;
}

function nameToAttributes(drivers) {
  return drivers.map(function (driver){
      let firstName = driver.split(" ")[0];
      let lastName = driver.split(" ")[1];
    return {firstName: firstName, lastName: lastName};
  });
// in this function why can't you set the split driver to variable driver and use that for first and last name?
}

function attributesToPhrase(drivers){
  return drivers.map(function (driver){
    return `${driver.name} is from ${driver.hometown}`
  });
}
