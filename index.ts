interface Payload {
    weight: number;
    // constructor(weight: number) {
    //     this.weight = weight;
    // }
}

interface Engine {
    thrust: number;
    // constructor(thrust: number) {
    //     this.thrust = thrust;
    // }
}

interface Stage {
    engines: Engine[];
    // constructor(engines: Engine[]) {
    //     this.engines = engines;
    // }
}

interface Rocket {
    payload: Payload;
    stages: Stage[];
    // constructor(payload: Payload, stages: Stage[]) {
    //     this.payload = payload;
    //     this.stages = stages;
    // }
}

interface RocketFactory<T extends Rocket> {
    createRocket(): T;
    createPayload(): Payload;
    createStages(): Stage[];
}

class Client {
    buildRocket <T extends Rocket> (factory: RocketFactory<T>): T {
        let rocket = factory.createRocket();
        rocket.payload = factory.createPayload();
        rocket.stages = factory.createStages();
        return rocket;
    }
}

class ExperimentalRocket implements Rocket {
    
}
class User {
    name: string;
    surname: string;
    constructor(name: string, surname: string) {
        this.name = name;
        this.surname = surname;
    }
}

let user = new User('Akmal', 'Norqobilov');

console.log(user);

console.log("ishladi");
