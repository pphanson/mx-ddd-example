export default function MarketActivity({ id, name, type, owner}) {
    return Object.freeze({
        id,
        type,
        name,
        owner
    })
}