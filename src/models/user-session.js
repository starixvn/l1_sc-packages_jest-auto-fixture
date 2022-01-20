import { Chance } from "chance";
import * as randomHelper from "../helpers/random-helpers";

export const UserSession = (custom = {}) => {
    const chance = new Chance();
    const ssoTime = chance.date();

    return {
        ssoToken: randomHelper.randomGuid(custom.ssoToken),
        sessionId: randomHelper.randomGuid(custom.sessionId),
        userId: randomHelper.randomGuid(custom.userId),
        memberId: `${randomHelper.randomInteger(custom.memberId)}`,
        ssoTime: custom.ssoTime ?? ssoTime,
        recheckInTime: custom.recheckInTime ?? ssoTime,
        username: randomHelper.randomName(custom.username),
        browserUserAgent: custom.browserUserAgent ?? chance.word(),
        ip: custom.ip ?? chance.ip(),
        language: custom.language ?? chance.locale({ region: true }),
        currencyCode: randomHelper.randomCurrency(custom.currencyCode),
        currencyName: randomHelper.randomCurrency(custom.currencyName),
        currencyGroupId: randomHelper.randomGuid(custom.currencyGroupId),
        isTestCurrency: custom.isTestCurrency ?? chance.bool(),
        multiplier: randomHelper.randomInteger(custom.multiplier),
        partnerId: custom.partnerId ?? chance.string(),
        memberName: randomHelper.randomName(custom.memberName),
        siteName: randomHelper.randomName(custom.siteName),
        system: custom.system ?? chance.integer({ min: 1, max: 3 }),
    };
};
