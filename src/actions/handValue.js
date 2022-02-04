export const getHandValue = () => {
    return {
        type: 'GETHANDVALUE'
    }
}

export const setHandValue = (val) => {
    return {
        type: 'SETHANDVALUE',
        payload: val
    }
}