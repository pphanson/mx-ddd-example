import MarketActivity  from "../Entity/MarketActivity.entity";

/**
 * 更新营销活动的类型
 * @param {*} param0 
 * @returns 
 */
export const updateType = ({ entity, type }) => {
    if (!type) {
        throw new Error('type不是有效的字符类型')
    }
    return MarketActivity({
        ...entity,
        type,
    })
};

/**
 * 更新营销活动的名称
 * @param {*} param0 
 * @returns 
 */
export const updateName = ({ entity, name}) => {
    if (!name) {
        throw new Error('name不是有效的字符类型')
    }
    return MarketActivity({
        ...entity,
        name,
    })
}