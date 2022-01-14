import { Chance } from "chance";
import { UserSession } from "./users";

function SignInPayload(username, browserAgent) {
    const chance = new Chance();

    return {
        ss: UserSession(username, browserAgent),
        username: username ?? chance.name(),
    };
}

export default { SignInPayload };
