
import { IProjectCard } from "./IProjectCard";
import { Tags } from "./Tags";
import { CardType } from "./CardType";
import { Player } from "../Player";
import { Game } from "../Game";

export class LunarBeam implements IProjectCard {
    public cost: number = 13;
    public tags: Array<Tags> = [Tags.EARTH, Tags.ENERGY];
    public name: string = "Lunar Beam";
    public cardType: CardType = CardType.AUTOMATED;
    public text: string = "Decrease your mega credit production 2 steps and increase your heat production and energy production 2 steps each.";
    public description: string = "A huge energy beam. Difficult to collect, but who cares?";
    public play(player: Player, _game: Game): Promise<void> {
        player.megaCreditProduction -= 2;
        player.heatProduction += 2;
        player.energyProduction += 2;
        return Promise.resolve();
    }
}
