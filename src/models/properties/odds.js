import { Choices } from "./choice";
import { Chance } from "chance";

export const Odds = () => {
    const chance = new Chance();
    const generatedChoices = Choices();
    const odds = {};

    generatedChoices.forEach((choice) => {
        odds[choice] = chance.floating({ min: 0, fixed: 2, max: 100 });
    });

    return odds;
};
