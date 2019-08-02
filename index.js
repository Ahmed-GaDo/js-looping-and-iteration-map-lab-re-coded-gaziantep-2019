// Code your solution in this file.
<<<<<<< HEAD
=======
// Code your solution in this file.
>>>>>>> 4cd8cfcb7454e7e01cb895b3f61209fa3a7e0717
function lowerCaseDrivers (list){

    return list.map(function(driver) {
        return driver.toLowerCase();
      });
    }
    
    function nameToAttributes(list) {
      return list.map(function(driver) {
        const driverFirst = driver.split(' ')[0];
        const driverLast = driver.split(' ')[1];
    
        return { firstName: driverFirst, lastName: driverLast };
      });
    }
    
    function attributesToPhrase(drivers) {
      return drivers.map(function(driver) {
        return `${driver.name} is from ${driver.hometown}`;
      })}
      