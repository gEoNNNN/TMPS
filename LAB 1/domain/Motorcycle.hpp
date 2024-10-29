#ifndef MOTORCYCLE_HPP
#define MOTORCYCLE_HPP

#include "Vehicle.hpp"
#include <iostream>

class Motorcycle : public Vehicle {
public:
    Motorcycle() : Vehicle("Motorcycle") {}
    void displayInfo() const override {
        std::cout << "Vehicle Type: " << type << ", Engine: " << engineType
                  << ", Transmission: " << transmission << std::endl;
    }
};

#endif
