
import { useContext } from 'react'
import {Card} from '../components/Card'
import { ProductContext } from '../context/ProductContext'
import { CartContext } from '../context/CartContext'

export const BuysPage = () => {
  
    const {products} = useContext( ProductContext) //En vez de hacer aqui la llamada a la api la hacemos en el context 

    const {addPurchase,deletePurchase} = useContext(CartContext)

    const handleAdd = (purchase) => {
        addPurchase(purchase)
        
    }
   
    const handleDelete = (id) => {
        deletePurchase(id)
    }
  
    return (
    <>
        <h1>Purchases:</h1>
        <hr/>
        {products.map(product => (
            <Card 
                key={product.id} 
                image={product.image} 
                title= {product.title} 
                description={product.description} 
                price ={product.price}
                handleAdd={() => handleAdd(product)}
                handleDelete={() => handleDelete(product.id)} >    
            </Card>
        ))}
        
    
    </>
    )
}
