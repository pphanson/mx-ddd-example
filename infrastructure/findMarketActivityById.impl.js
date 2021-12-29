import findMarketActivityByIdFacde from "../domain/MarketActivity/facade/findMarketActivityById.facade";
/**
 * 根据营销活动id查询营销活动实体
 * @param {*} findMarketActivityById 
 * @returns 
 */
const findMarketActivityById = api => findMarketActivityByIdFacde(async (id) => {
    if (!id) {
        throw new Error('id无效')
    }
    return api.queryMarketAcivity({id}); 
});

export default findMarketActivityById;