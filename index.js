function lowerCaseDrivers(array){
  return array.map(function(name){
    return name.toLowerCase()
  })
}

function nameToAttributes(arr){
  return arr.map(function(name){
    let splitName = name.split(" ")
    return Object.assign({}, {firstName: splitName[0], lastName: splitName[1]})
  })
}

function attributesToPhrase(arr){
  return arr.map(function(driverObject){
    return `${driverObject.name} is from ${driverObject.hometown}`
  })
}
