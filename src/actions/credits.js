export const removeCredits = (bet) => {
    return {
        type: 'REMOVECREDITS',
        payload: bet
    }
}

export const addCredits = (bet) => {
    return {
        type: 'ADDCREDITS',
        payload: bet
    }
}