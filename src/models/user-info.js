import { Chance } from "chance";
import * as randomHelper from "../helpers/random-helpers";

export const UserInfo = (custom = {}) => {
    const chance = new Chance();
    const maxBet = randomHelper.randomInteger(custom.maxBet);

    return {
        name: randomHelper.randomName(custom.name),
        UID: randomHelper.randomInteger(custom.UID),
        avatarId: chance.integer(),
        banned: randomHelper.randomBool(custom.banned),
        currency: randomHelper.randomCurrency(custom.currency),
        disabled: randomHelper.randomBool(custom.disabled),
        id: randomHelper.randomGuid(id),
        inGameRoom: custom.inGameRoom,
        isSignedInSM: randomHelper.randomBool(custom.isSignedInSM),
        joinedOn: chance.date(),
        maxBet: maxBet,
        minBet: custom.minBet ?? chance.integer({ min: 1, max: maxBet / 2 }),
        red: randomHelper.randomInteger(custom.red),
        type: randomHelper.randomBool(custom.type),
    };
};
