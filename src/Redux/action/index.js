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