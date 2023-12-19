import { useContext } from "react"
import { CartContext } from "../context/CartContext"


export const CartPage = () => {

  const {purchaseList,increaseQuantity,decreaseQuantity,deletePurchase} = useContext(CartContext)

  const calculateTotal = () => {
    
    return purchaseList.reduce((total, item) => total + item.price*item.quantity, 0).toFixed(2) //tofixed le pasa cuantos decimales quieres

  }

  return (
    
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            purchaseList.map(item => (
              <tr key={item.id}>
                <th >{item.title}</th>
                <td>{item.price}</td>
                <td>
                    <button className="btn btn-ouline-primary" onClick={()=> increaseQuantity(item.id)}> + </button>
                    <button className="btn btn-primary">{item.quantity}</button>
                    <button className="btn btn-ouline-primary"onClick={() => decreaseQuantity(item.id)}> - </button>
                </td>
                <td> <button className="btn btn-danger" onClick={() => deletePurchase(item.id)}>Delete</button></td>
            </tr>

            ))
          }

          <tr>
            <th><b>TOTAL:</b></th>
            <td>${calculateTotal()}</td>
            <td></td>
            <td></td>
          </tr>  

        </tbody>
    </table>
    
    <div className="d-grid gap-2">
      <button 
          className="btn btn-primary" 
          disabled={purchaseList<1}
          >Purchase
        </button>
    </div>

    
    </>

  )
}
