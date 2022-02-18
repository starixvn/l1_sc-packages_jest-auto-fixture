import { Choices } from "./choice";
import { Chance } from "chance";

export const MaxBetPerChoice = () => {
    const chance = new Chance();
    const generatedChoices = Choices();
    const bet = {};

    generatedChoices.forEach((choice) => {
        bet[choice] = chance.integer({ min: 1, max: 2000 });
    });

    return bet;
};
