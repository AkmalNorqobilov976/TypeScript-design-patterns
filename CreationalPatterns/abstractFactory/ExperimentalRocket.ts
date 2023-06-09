import { RocketFactory, Rocket, Payload, Stage, Engine } from "./Interfaces";
class ExperimentalRocket implements Rocket {
    payload: Payload;
    stages: Stage[];
    // constructor(payload: Payload, stages: Stage[]) {
    //     this.payload = payload;
    //     this.stages = stages;
    // }
}

class ExperimentalRocketPayload implements Payload {
    weight: number;
}


class ExperimentalRocketEngine implements Engine {
    thrust: number;
}

class ExperimentalRocketStage implements Stage {
    engines: ExperimentalRocketEngine[];
}

class ExperimentalRocketFactory implements RocketFactory<ExperimentalRocket> {
    createPayload(): ExperimentalRocketPayload {
        return new ExperimentalRocketPayload();        
    }
    createRocket(): ExperimentalRocket {
        return new ExperimentalRocket();
    }
    createStages(): Stage[] {
        return [new ExperimentalRocketStage()]
    }
}