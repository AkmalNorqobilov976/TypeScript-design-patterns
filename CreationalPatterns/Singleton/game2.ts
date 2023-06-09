import Game from "./igame";
import Leaderboard from "./leaderboard";


export class Game2 implements Game {
    leaderboard: Leaderboard;

    constructor() {
        this.leaderboard = new Leaderboard();
    }

    addWinner(position: number, name: string): void {
        this.leaderboard.addWinner(position, name);
    }
}