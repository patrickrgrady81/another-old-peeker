export const saveDeck = (deck) => {
    return {
        type: 'SAVEDECK',
        payload: deck
    }
}