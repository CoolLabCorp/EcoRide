// Ride.js

function Ride(driver,origin,destin,slots,timestamp) {
    this.driver = driver;
    this.origin = origin;
    this.destin = destin;
    this.slots = slots;
    this.timestamp = timestamp;
}

module.exports = Ride;
