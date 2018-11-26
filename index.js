// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function(name) {
    return name.toLowerCase()})
}

function nameToAttributes(drivers) {
  const newDriver = drivers.map(function(driver){
    const first = driver.split(" ")[0];
    const last = driver.split(" ")[1];
    return {firstName: first, lastName: last}
  })
   return newDriver
}

function  attributesToPhrase(drivers){
  const string = drivers.map(function(value){
    return `${value.name} is from ${value.hometown}`
    }
  )
  return string
}
