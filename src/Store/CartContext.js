import { createContext } from "react";
import { useState , useContext } from "react";

const CartContext = createContext({});



const CartContextProvider = (props) => {
    const [cartItems , setCartItems] = useState([])
  return (
    <CartContext.Provider value={{cartItems}}>{props.children}</CartContext.Provider>
  )
}

export default CartContextProvider

export const useCartContext=()=>{
    return useContext(CartContext);
}
