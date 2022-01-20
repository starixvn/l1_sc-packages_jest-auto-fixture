import { UserSession } from "../models/user-info";
import * as randomHelper from "../helpers/random-helpers";
import { Chance } from "chance";

export const SignInPayload = (custom = {}) => {
    return {
        ss: UserSession({ username: custom.username, browserUserAgent: custom.browserUserAgent }),
        username: randomHelper.randomName(username),
        isAuthenticated: randomHelper.randomBool(custom.isAuthenticated),
        isSSO: randomHelper.randomBool(custom.isSSO),
        language: randomHelper.randomLanguage(custom.language),
        memberName: randomHelper.randomName(custom.name),
        time: new Chance().date(),
    };
};
