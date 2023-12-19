import { useEffect, useState } from "react"
import { ProductContext } from "./ProductContext"

// eslint-disable-next-line react/prop-types
export const ProductProvider = ({ children }) => {

    //Nos traemos aqui la llamada a la API
    const [products, setProducts]  = useState([])

    const fetchProducts = async () => {

        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        console.log(data)
        setProducts(data)

    }

    useEffect(() => {
        fetchProducts()
    },[])



    return (

       <ProductContext.Provider value={{products}}>
            {children}
       </ProductContext.Provider>
  )
}
