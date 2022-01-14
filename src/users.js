import { Chance } from "chance";

function UserSession(username = "", browserAgent = "") {
    const chance = new Chance();

    return {
        userId: chance.guid(),
        username: username ?? chance.name(),
        browserUserAgent: browserAgent ?? chance.word(),
    };
}

function UserInfo() {
    const chance = new Chance();

    return {
        name: chance.name(),
    };
}

export { UserSession, UserInfo };
