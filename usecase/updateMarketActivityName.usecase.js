import { updateName } from '../domain/MarketActivity/Behavior/MarketActivity.behavior'

const updateMarketAcitivityName = ({findMarketActivityById, updateMarketAcitivity }) => async (id, name) => {
    if (id) {
        const entity = await findMarketActivityById(id);
        const newEntity = updateName({entity, name})
        return updateMarketAcitivity(newEntity)

    }
}

export default updateMarketAcitivityName;