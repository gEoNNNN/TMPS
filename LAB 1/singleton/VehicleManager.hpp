#ifndef VEHICLE_MANAGER_HPP
#define VEHICLE_MANAGER_HPP

class VehicleManager {
private:
    static VehicleManager* instance;
    VehicleManager() {}

public:
    static VehicleManager* getInstance() {
        if (instance == nullptr) {
            instance = new VehicleManager();
        }
        return instance;
    }

    void manageVehicleCreation() {
    }
};

VehicleManager* VehicleManager::instance = nullptr;

#endif

