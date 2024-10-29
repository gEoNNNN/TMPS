#ifndef CONCRETE_BUILDERS_HPP
#define CONCRETE_BUILDERS_HPP

#include "VehicleBuilder.hpp"
#include "../domain/Car.hpp"

class CarBuilder : public VehicleBuilder {
public:
    CarBuilder() { vehicle = new Car(); }

    VehicleBuilder& setEngineType(const std::string& engine) override {
        vehicle->engineType = engine;
        return *this;
    }

    VehicleBuilder& setTransmission(const std::string& transmission) override {
        vehicle->transmission = transmission;
        return *this;
    }

    Vehicle* build() override {
        return vehicle;
    }
};

#endif
