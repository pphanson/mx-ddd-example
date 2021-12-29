import MarketActivity from "../Entity/MarketActivity.entity"

/**
 * 根据营销活动id查询营销活动实体
 * @param {*} findMarketActivityByIdImpl 
 * @returns 
 */
const findMarketActivityById = (findMarketActivityByIdImpl) => async (id) => {
    if (!id) {
        throw new Error('id无效')
    }
    const data = await findMarketActivityByIdImpl(id);
    if (data) {
        return MarketActivity(data);
    }
};

export default findMarketActivityById;