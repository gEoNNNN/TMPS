#ifndef VEHICLE_BUILDER_HPP
#define VEHICLE_BUILDER_HPP

#include "../domain/Vehicle.hpp"

class VehicleBuilder {
protected:
    Vehicle* vehicle;

public:
    virtual ~VehicleBuilder() { delete vehicle; }

    virtual VehicleBuilder& setEngineType(const std::string& engine) = 0;
    virtual VehicleBuilder& setTransmission(const std::string& transmission) = 0;
    virtual Vehicle* build() = 0;
};

#endif
