import { createContext} from "react"; 
import {useState} from 'react';

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);



    const addToCart = (item, qty) => {
        const index = cartList.find(cartItem => cartItem.id === item.id);

        index === undefined ?  setCartList([...cartList, {item, qtyItem : qty, id: item.id, product: item.product, price: item.price, image: item.image, memes: item.memes, description: item.description, stock: item.stock}]) : index.qtyItem  += qty;


    }
    const removeFromCart = (item) => {
        setCartList(cartList.filter(cartItem => cartItem.id !== item.id))
    }

    const removeAllFromCart = () => {
        setCartList([]);
    }

    const calcTotal = () => {
        return cartList.reduce((acc, item) => acc + item.qtyItem * item.price, 0)* 1.21;
   

    }
    
    const calcularItems = () => {
        let qty = cartList.map(item => item.qtyItem);
        return qty.reduce((total, qty) => total + qty, 0);
    }
  
    




return (
<CartContext.Provider value={{cartList, addToCart, removeFromCart, removeAllFromCart, calcularItems, calcTotal}}>
{children}
  </CartContext.Provider>

)

}
export default CartContextProvider;

