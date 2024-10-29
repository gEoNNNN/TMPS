#ifndef CAR_HPP
#define CAR_HPP

#include "Vehicle.hpp"
#include <iostream>

class Car : public Vehicle {
public:
    Car() : Vehicle("Car") {}

    void displayInfo() const override {
        std::cout << "Vehicle Type: " << type
                  << ", Engine: " << engineType
                  << ", Transmission: " << transmission << std::endl;
    }
};

#endif
