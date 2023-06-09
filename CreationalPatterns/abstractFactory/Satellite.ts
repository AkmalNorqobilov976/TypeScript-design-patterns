import { Engine, Payload, Rocket, RocketFactory, Stage } from "./Interfaces";

class Satellite implements Payload {
    constructor(
        public id: number,
        public weight: number
    ) {}
}

class FreightRocketFirstStage implements Stage {
    engines: Engine[];
    // constructor(public engines: Engine[]) {}
}

class FregihtRocketSecondStage implements Stage {
    engines: Engine[];
    // constructor(public engines: Engine[]) {}
}
type FregihtRocketStages = [FreightRocketFirstStage, FregihtRocketSecondStage];

class FreightRocket implements Rocket {
    payload: Satellite;
    stages: FregihtRocketStages;
}

class FreightRocketFactory implements RocketFactory<FreightRocket> {
    nextSatelliteId: number = 0;
    createRocket(): FreightRocket {
        return new FreightRocket();
    }

    createPayload(): Satellite {
        return new Satellite();
    }

    createStages(): FregihtRocketStages[] {
        return [new FreightRocketFirstStage(), new FregihtRocketSecondStage()];
    }
}