// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  drivers.map(driver => driver.toLowerCase())
}

function nameToAttributes(driverName) {
  return driverName.map(function (driver){
    const driver1 = driver.split(" ")[0];
    const driver2 = driver.split(" ")[1];

    return {firstName: driver1, lastName: driver2};
  });
}

function attributesToPhrase(drivers) {
  return drivers.map(driver => `${driver.name} is from ${driver.hometown}`)
}
