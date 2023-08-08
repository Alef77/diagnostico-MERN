
export const TaskReducer = (initialState, action) => {
    switch (action.type) {

        case "post":
            return initialState= !initialState;
        case "put":
            return initialState= !initialState;
        case "delete":
            return initialState= !initialState; 
        default:
            break;
    }
}
