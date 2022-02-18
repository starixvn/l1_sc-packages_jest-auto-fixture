import { Chance } from "chance";
import * as randomHelper from "../helpers/random-helpers";
import { Choices } from "./choice";

export const Bet = (custom = {}) => {
    const basicBet = {
        phien: randomHelper.randomInteger(custom.id),
        uid: randomHelper.randomGuid(custom.uid),
        betwin: randomHelper.randomInteger(custom.betwin),
        currency: randomHelper.randomCurrency(custom.currency),
        memberId: randomHelper.randomInteger(custom.memberId),
        name: randomHelper.randomName(custom.name),
        odds: custom.odds ?? Odds(),
        thanhtoan: randomHelper.randomBool(custom.thanhtoan),
        paid: randomHelper.randomBool(custom.paid),
        time: new Chance().date(),
        siteId: `${randomHelper.randomInteger(custom.siteId)}`,
    };

    basicBet.odds = custom.odds ?? Odds();
    const amountOnBetChoices = custom.amountOnBetChoices ?? BetChoiceAmount();

    return { ...basicBet, ...amountOnBetChoices };
};

export const Odds = () => {
    const chance = new Chance();
    const generatedChoices = Choices();
    const odds = {};

    generatedChoices.forEach((choice) => {
        odds[choice] = chance.floating({ min: 0, fixed: 2, max: 100 });
    });

    return odds;
};

export const BetChoiceAmount = () => {
    const chance = new Chance();
    const generatedChoices = Choices();
    const bet = {};

    generatedChoices.forEach((choice) => {
        bet[choice] = chance.integer({ min: 1, max: 2000 });
    });

    return bet;
};
