#ifndef VEHICLE_FACTORY_HPP
#define VEHICLE_FACTORY_HPP

#include "../domain/Car.hpp"
#include "../domain/Truck.hpp"
#include "../domain/Motorcycle.hpp"

class VehicleFactory {
public:
    Vehicle* createVehicle(const std::string& type) {
        if (type == "Car") return new Car();
        if (type == "Truck") return new Truck();
        if (type == "Motorcycle") return new Motorcycle();
        return nullptr;
    }
};

#endif
