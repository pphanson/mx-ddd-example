export const queryMarketAcivity = ({ id, keyword, type, owner}) => {
    return new Promise((resolve) => {
        resolve({
            id,
            name: `Market_Activity_${id}`,
            type: 'coupon',
            owner: '015312'
        })
    })
}

export const updateMarketAcitivity = (data) => {
    return new Promise((resolve, reject) => {
        const { id } = data; 
        if (id) {
            resolve({
                name: `Market_Activity_${id}`,
                type: 'coupon',
                owner: '015312',
                ...data
    
            })
        } else {
            reject(new Error('无效的id'))
        }
        
    })
}