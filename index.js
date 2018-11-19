
function lowerCaseDrivers(array) {
  return array.map((driver) => {return driver.toLowerCase()})
}

// function nameToAttributes(array) {
//   return array.map(function(driver){
//   const driverNameX = driver.split(' ')[0];
//   const driverNameY = driver.split(' ')[1];
//   return  firstName: driverNameX, lastName: driverNameY ;
// })
//
// }


function nameToAttributes(list) {
  return list.map(function(driver) {
    const driverFirst = driver.split(' ')[0];
    const driverLast = driver.split(' ')[1];

    return { firstName: driverFirst, lastName: driverLast };
  });
}

// function attributesToPhrase(array) {
//   return array.map((drivers) => {return `${drivers.name} is from ${drivers.hometown}`})
//
// }


function attributesToPhrase(drivers) {
  return drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
}
