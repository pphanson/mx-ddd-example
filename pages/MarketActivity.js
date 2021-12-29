import { useState, useCallback } from 'react'

import updateMarketAcitivityName from "../usecase/updateMarketActivityName.usecase"
import findMarketActivityById from "../infrastructure/findMarketActivityById.impl";
import updateMarketAcitivity from "../infrastructure/updateMarketAcitivity.impl";
import * as api from '../api/MarketActivity.api';
import JSONView from 'react-json-view'

const updateName = updateMarketAcitivityName({
    findMarketActivityById: findMarketActivityById(api),
    updateMarketAcitivity: updateMarketAcitivity(api)
})


export default function MarketActivity() {
    const [id, setId] = useState();
    const [name, setName] = useState('');
    const [output, setOutput] = useState({})


    const submit = useCallback(() => {
        updateName(id, name).then(result => {
            setOutput(result)
        })
    }, [id, name])

    const onIdChange = e => {
        setId(e.target.value)
    }

    const onNameChange = e => {
        setName(e.target.value)
    }

    return <div style={{ display: 'flex', fontSize: 20 }}>
        <div>
            <form>
                <div style={{ display: 'flex', margin: '10px' }}><label style={{ width: 150 }}>营销活动ID:</label><input id="id" value={id} onChange={onIdChange}></input></div>
                <div style={{ display: 'flex', margin: '10px' }}><label style={{ width: 150 }}>营销活动名称:</label><input id="name" value={name} onChange={onNameChange}></input></div>
            </form>
            <button onClick={submit}>提交</button>
        </div>
        <div style={{ display: 'flex', margin: '10px' }}>
            <div>结果:</div>
            <JSONView src={output} style={{ height: 300, minWidth: 400, backgroundColor: '#FFF' }}></JSONView>
        </div>
    </div >
}