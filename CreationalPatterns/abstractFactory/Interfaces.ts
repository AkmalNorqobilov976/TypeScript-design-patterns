export interface Payload {
    weight: number;
}

export interface Engine {
    thrust: number;
}

export interface Stage {
    engines: Engine[];
}

export interface Rocket {
    payload: Payload;
    stages: Stage[];
}

export interface RocketFactory<T extends Rocket> {
    createRocket(): T;
    createPayload(): Payload;
    createStages(): Stage[];
}