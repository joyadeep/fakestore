import axios from "axios"



export const fetch_all_products=()=>{
     return async(dispatch)=>{
        const response=await axios.get("https://fakestoreapi.com/products");
        dispatch(
            {
                type:"FETCH_ALL_PRODUCTS",
                payload:response
            }
        )
     }
    
    }



export const add_to_cart=(product)=>{
    return {
        type: "ADD_TO_CART",
        product
    }
}

export const remove_from_cart=(id)=>{
    return{
        type:"REMOVE_FROM_CART",
        id
    }
}
