import * as randomHelper from "../helpers/random-helpers";

export const Round = (custom = {}) => {
    return {
        id: randomHelper.randomInteger(custom.id),
        exchangeRateId: randomHelper.randomInteger(custom.exchangeRateId),
        result: custom.result,
        settlementResult: custom.settlementResult,
    };
};
