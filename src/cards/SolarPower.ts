
import { IProjectCard } from "./IProjectCard";
import { Tags } from "./Tags";
import { CardType } from "./CardType";
import { Player } from "../Player";
import { Game } from "../Game";

export class SolarPower implements IProjectCard {
    public cost: number = 11;
    public tags: Array<Tags> = [Tags.ENERGY, Tags.STEEL];
    public cardType: CardType = CardType.AUTOMATED;
    public name: string = "Solar Power";
    public text: string = "Increase your energy production 1 step. Gain 1 victory point.";
    public description: string = "Perhaps the most readily available energy source on Mars.";
    public play(player: Player, _game: Game): Promise<void> {
        player.energyProduction++;
        player.victoryPoints++;
        return Promise.resolve();
    }
}
