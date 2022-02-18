import { Chance } from "chance";
import * as randomHelper from "../helpers/random-helpers";
import { Odds, MaxBetPerChoice } from "./properties";

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
    const amountOnBetChoices = custom.amountOnBetChoices ?? MaxBetPerChoice();

    return { ...basicBet, ...amountOnBetChoices };
};
