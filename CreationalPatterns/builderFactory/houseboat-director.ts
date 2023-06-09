import House from "./house";
import HouseBuilder from "./house-builder";

export default class HouseBoatDirector {
    static construct(): House {
        return new HouseBuilder()
            .setBuildingType('House Boat')
            .setNumberDoors(4)
            .setNumberWindows(4)
            .setWallMaterial('Wood')
            .getResult();
    }
}