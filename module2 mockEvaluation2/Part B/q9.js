function displayCar(){
    console.log(`This is car`)
}
function displayTruck(){
    console.log(`This is Truck`);
}
function displayBike(){
    console.log(`This is Bike`);
}

function vehicleInfo(vehicleCategory, callbackFn){
    console.log(`Vehicle category : ${vehicleCategory}`);
    callbackFn();
}

vehicleInfo("Car", displayCar)
vehicleInfo("Truck", displayTruck)
vehicleInfo("Bike", displayBike)

