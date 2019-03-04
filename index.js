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
    return drivers.slice().sort(function (first, second) {
      return first.revenue - second.revenue;
    });
  };

const driversByName = function(drivers) {
  drivers.sort();
}

function totalRevenue() {}

function averageRevenue() {}
