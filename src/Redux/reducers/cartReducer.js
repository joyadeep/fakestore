const initialState={
    cartlist:[]
}

const cartReducer=(state=initialState,action)=>{

    switch(action.type)
    {
        case "ADD_TO_CART":
            return{
                ...state,
                cartlist:[...state.cartlist,action.product]      
            }
        
        case "REMOVE_FROM_CART":
            const newcartlist=state.cartlist.filter((item)=>item.id !== action.id)
            return{
                ...state,
                cartlist: newcartlist
            }

        default:
            {
                return state;
            }
    }
}


export default cartReducer;