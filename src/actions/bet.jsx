export const increment = () => {
    return {
        type: 'INCREMENT'
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

export const betOne = () => {
    return {
        type: 'BETONE'
    }
}

export const betMax = () => {
    return {
        type: 'BETMAX',
        max: 5
    }
}