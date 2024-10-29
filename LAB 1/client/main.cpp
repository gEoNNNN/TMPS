#include <iostream>
#include "../domain/Vehicle.hpp"
#include "../domain/Car.hpp"
#include "../domain/Truck.hpp"
#include "../domain/Motorcycle.hpp"
#include "../factory/VehicleFactory.hpp"
#include "../builder/VehicleBuilder.hpp"
#include "../builder/ConcreteBuilders.hpp"

int main() {
    VehicleFactory factory;
    Vehicle* car = factory.createVehicle("Car");
    Vehicle* truck = factory.createVehicle("Truck");
    Vehicle* motorcycle = factory.createVehicle("Motorcycle");

    car->displayInfo();
    truck->displayInfo();
    motorcycle->displayInfo();

    CarBuilder carBuilder;
    carBuilder.setEngineType("V8").setTransmission("Automatic");
    Vehicle* customCar = carBuilder.build();
    customCar->displayInfo();

    delete car;
    delete truck;
    delete motorcycle;
    delete customCar;

    return 0;
}
