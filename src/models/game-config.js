import { randomBool, randomInteger, randomName } from "../helpers/random-helpers";
import { Odds, MaxBetPerChoice } from "./properties";

export const GameConfig = (custom = {}) => {
    return {
        type: 0,
        name: randomName(custom.name),
        enabled: randomBool(custom.enabled),
        botenabled: randomBool(custom.botenabled),
        minbet: randomInteger(custom.minbet, 1),
        maxbet: randomInteger(custom.maxbet, 2000),
        bot_maxbet: randomInteger(custom.bot_maxbet, 2000),
        hour_maxbot: custom.hour_maxbot,
        disabled_message: "Disaled Game",
        choices_maxbet: custom.choices_maxbet ?? MaxBetPerChoice(),
        odds: custom.odds ?? Odds(),
        delayStartTime: custom.delayStartTime ?? 0,
        enableFreeBet: custom.enableFreeBet ?? false,
        siteExclusions: custom.siteExclusions ?? [],
        exchangeReload: custom.exchangeReload ?? false,
    };
};
