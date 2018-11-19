// Code your solution in this file.
function lowerCaseDrivers(array) {
const newDrvier = array.map(driver => driver.toLowerCase())

return newDrvier
}

function nameToAttributes(array){
  const newDriver = array.map(function(driver){
    const first = driver.split(" ")[0];
    const last = driver.split(" ")[1];
    return {firstName: first, lastName: last}
  })

  return newDriver
}

function  attributesToPhrase(array){
  const newArr = array.map(function(value){
    return `${value.name} is from ${value.hometown}`
    }
  )
  return newArr
}
