import { Chance } from "chance";

export const randomGuid = (value) => {
    return value ?? new Chance().guid();
};

export const randomName = (value) => {
    return value ?? new Chance().name();
};

export const randomInteger = (value, min = 0) => {
    return value ?? new Chance().integer({ min });
};

export const randomBool = (value) => {
    return value ?? new Chance().bool();
};

export const randomCurrency = (value) => {
    return value ?? new Chance().currency();
};

export const randomLanguage = (value) => {
    return value ?? new Chance().locale({ region: true });
};
