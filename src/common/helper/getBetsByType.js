import betType from "../BetType";

const getBetsByType = (allBets, currentType) => {
    if (currentType === betType.PASS_LINE)
        return allBets.passBets;
    if (currentType === betType.DONT_PASS_LINE)
        return allBets.dontPassBets;
    return [];
}

export default getBetsByType;