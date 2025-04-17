import BetTypes from "../BetType";

const getBetsByType = (allBets, currentType) => {
    if (currentType === BetTypes.PASS_LINE_BET)
        return allBets.passBets;
    if (currentType === BetTypes.DONT_PASS_LINE_BET)
        return allBets.dontPassBets;
    return [];
}

export default getBetsByType;