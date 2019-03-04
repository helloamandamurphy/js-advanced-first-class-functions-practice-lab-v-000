const logDriverNames = function (drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name);
  });
};

const logDriversByHometown = function (drivers, hometown) {
  drivers.forEach(function (driver) {
    if (driver.hometown === hometown) {
      console.log(driver.name);
    }
  });
};

const driversByRevenue = function(drivers) {
  drivers.forEach(function (driver, cb) {
    driver.sort(driver.revenue)
    
    const numberSorter = function (num1, num2) {
  return num1 - num2;
};
 
    driver.sort(numberSorter);
  })
}

function driversByName() {}

function totalRevenue() {}

function averageRevenue() {}
