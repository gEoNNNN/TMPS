#ifndef VEHICLE_HPP
#define VEHICLE_HPP

#include <string>

class Vehicle {
public:
    std::string type;
    std::string engineType;  
    std::string transmission;

    Vehicle(const std::string& type) : type(type) {}
    virtual ~Vehicle() = default;
    virtual void displayInfo() const = 0;
};

#endif
