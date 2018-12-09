
export const indexSelect = () => {
    return {
    type: 'UPDATE_CHOICE_WITH_MY_INDEX',
    index: Math.floor(Math.random()*4)
    }
}