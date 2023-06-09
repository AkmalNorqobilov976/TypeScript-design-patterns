import House from "./house";
import HouseBuilder from "./house-builder";

export default class CastleDirector {
    static construct(): House {
        return new HouseBuilder()
            .setBuildingType("Castle")
            .setNumberDoors(100)
            .setWallMaterial('Sandstone')
            .setNumberWindows(400)
            .getResult();
    }
}