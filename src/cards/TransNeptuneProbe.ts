
import { IProjectCard } from "./IProjectCard";
import { Tags } from "./Tags";
import { CardType } from "./CardType";
import { Player } from "../Player";
import { Game } from "../Game";

export class TransNeptuneProbe implements IProjectCard {
    public cost: number = 6;
    public tags: Array<Tags> = [Tags.SCIENCE, Tags.SPACE];
    public name: string = "Trans-Neptune Probe";
    public cardType: CardType = CardType.AUTOMATED;
    public text: string = "Gain 1 victory point";
    public description: string = "Exploring the Kupier belt objects";
    public play(player: Player, _game: Game): Promise<void> {
        player.victoryPoints++;
        return Promise.resolve();
    }
}
