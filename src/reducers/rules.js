export const rules = (state=false, action) => {
    switch(action.type){
        case 'RULES':
        return !state

        default:
            return state;
    }
}