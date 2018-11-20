// Code your solution in this file.
function lowerCaseDrivers(arr) {
return  arr.map(function(driver) { return driver.toLowerCase()})
}

function nameToAttributes(arr) {
return  arr.map(function(driver) {
const lala = driver.split(' ')[0]
const lolo = driver.split(' ')[1]
  return {firstName: lala, lastName: lolo}
})
}

function attributesToPhrase(arr) {
  return arr.map(function(driver) {return `${driver.name} is from ${driver.hometown}`})
}
