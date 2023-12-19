import { useReducer } from "react"
import { CartContext } from "./CartContext"

const initialState = []

// eslint-disable-next-line react/prop-types
export const CartProvider = ({children}) => {

    const addPurchase = (purchase) => {
        purchase.quantity= 1
        const action = {
            type: '[CART] Add Purchase',
            payload:purchase
        }
        dispatch(action)

    }
    const increaseQuantity = (id) => {
        const action = {
            type:'[CART] Increase Quantity Purchase',
            payload: id
        }
        dispatch(action)

    }
    const decreaseQuantity = (id) => {
        const action = {
            type:'[CART] Decrease Quantity Purchase',
            payload: id
        }
        dispatch(action)

    }
    const deletePurchase = (id) => {
        const action = {
            type:'[CART] Delete Purchase',
            payload: id
        }
        dispatch(action)

    }

    //Hacemos el Reducer

    const purchaseReducer = (state = initialState,action = {}) => {
        switch(action.type) {
            case '[CART] Add Purchase':
                return [...state,action.payload]
            
            case '[CART] Increase Quantity Purchase':
                return state.map(item => {
                    const quantity = item.quantity + 1
                    if (item.id === action.payload) return {...item, quantity: quantity} //Si el id coincide es decir ya esta en el carrito 
                                                                                        //devuelve todos los atributos y a la cantidad le sumas 1
                    return item                                                                   
                })

            case '[CART] Decrease Quantity Purchase':
                return state.map (item => {
                    const quantity =  item.quantity - 1
                    if(item.id === action.payload && item.quantity > 1) return {...item, quantity: quantity}
                    return item
                })
            
            case '[CART] Delete Purchase':
                return state.filter( purchase => purchase.id !== action.payload) //devuleve compras distintas a la que le hemos mandado
            default:
                return state    
        }
    }

     //Para definir la lista de compras usamos un useReducer
     const [purchaseList, dispatch] = useReducer(purchaseReducer,initialState)

    return (
        <CartContext.Provider value = {{purchaseList,addPurchase,increaseQuantity,decreaseQuantity,deletePurchase}}>
            {children}
        </CartContext.Provider>
    )
}
