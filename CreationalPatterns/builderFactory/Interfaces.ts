import { Engine, Stage } from "../abstractFactory/Interfaces";

interface Payload {
    weight: number;
}


interface Rocket {
    payload: Payload
}

class Probe implements Payload {
    weight: number;
}

class SolidRocketEngine implements Engine {
    thrust: number;
}

class LiquidRocketEngine implements Engine {
    fuelLevel = 0;
    thrust: number;
    refuel(level: number): void {
        this.fuelLevel = level;
    }
}

abstract class LiquidRocketStage implements Stage {
    engines: LiquidRocketEngine[] = [];
    refuel(level = 100): void {
        for (let engine of this.engines) {
            engine.refuel(level);
        }
    }
}
class FreightRocketFirstStage extends LiquidRocketStage {
    constructor(thrust: number) {
        super();
        let enginesNumber = 4;
        let singleEngineThrust = thrust / enginesNumber;
        for(let i = 0; i < enginesNumber; i++) {
            let engine = new LiquidRocketEngine(singleEngineThrust);
            this.engines.push(engine);
        }
    }
}

class SoundingRocket implements Rocket {
    payload: Payload;
    engines: SolidRocketEngine
}

