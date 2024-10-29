#ifndef TRUCK_HPP
#define TRUCK_HPP

#include "Vehicle.hpp"
#include <iostream>

class Truck : public Vehicle {
public:
    Truck() : Vehicle("Truck") {}
    void displayInfo() const override {
        std::cout << "Vehicle Type: " << type << ", Engine: " << engineType
                  << ", Transmission: " << transmission << std::endl;
    }
};

#endif

