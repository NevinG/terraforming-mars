
import { IProjectCard } from "./IProjectCard";
import { Tags } from "./Tags";
import { CardType } from "./CardType";
import { Player } from "../Player";
import { Game } from "../Game";

export class Pets implements IProjectCard {
    public cost: number = 10;
    private _animals: number = 0;
    public tags: Array<Tags> = [Tags.EARTH, Tags.ANIMAL];
    public cardType: CardType = CardType.ACTIVE;
    public name: string = "Pets";
    public get animals(): number {
        return this._animals;
    }
    public set animals(newAnimals: number) {
        if (newAnimals < this._animals) {
            // TODO - wont scale
            throw "ANIMALS MAY NOT BE REMOVED FROM THIS CARD";
        }
        this._animals = newAnimals;
    }
    public text: string = "ANIMALS MAY NOT BE REMOVED FROM THIS CARD. Add 1 animal to this card.";
    public description: string = "It wouldn't be the same without them";
    public play(player: Player, game: Game): Promise<void> {
        game.addCityTilePlacedListener(() => {
            this._animals++;
        });
        // 1 VP per 2 animals on card
        game.addGameEndListener(() => {
            player.victoryPoints += Math.floor(this._animals / 2);
        });
        this._animals++;
        return Promise.resolve();
    }
}
