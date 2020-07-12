export const score = (state = 0,action) => {
    switch(action.type){
        case 'YOU WIN':
        return state + 1

        default:
            return state
    }

}