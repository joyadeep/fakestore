const initialState={
    products:[]
}

const cartReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case "FETCH_ALL_PRODUCTS":
            return {
                ...state,
                products:action.payload.data
            }

        default:
            return state;
    }
}
export default cartReducer;
