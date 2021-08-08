export const changeHolds = (id) => {
    return {
        type: 'CHANGEHOLDS',
        id
    }
}

export const reset = () => {
    return {
        type: 'RESET'
    }
}