import MarketActivity from "../Entity/MarketActivity.entity"

/**
 * 根据营销活动id查询营销活动实体
 * @param {*} updateMarketAcitivityImpl 
 * @returns 
 */
const updateMarketAcitivity = (updateMarketAcitivityImpl) => async (data) => {
    if (!data) {
        throw new Error('无效')
    }
    const result = await updateMarketAcitivityImpl(data);
    if (result) {
        return MarketActivity(result);
    }
};

export default updateMarketAcitivity;