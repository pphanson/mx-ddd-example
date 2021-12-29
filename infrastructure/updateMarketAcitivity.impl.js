import updateMarketAcitivityFacde from "../domain/MarketActivity/facade/updateMarketAcitivity.facade";

/**
 * 根据营销活动id查询营销活动实体
 * @param {*} updateMarketAcitivityImpl 
 * @returns 
 */
const updateMarketAcitivity = api => updateMarketAcitivityFacde(async (data) => {
    if (!data) {
        throw new Error('无效对象')
    }
    return api.updateMarketAcitivity(data);
});

export default updateMarketAcitivity;