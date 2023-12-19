
import { useState } from "react"
import '../styles/card.css'

// eslint-disable-next-line react/prop-types
export const Card = ({image, title, description, price, handleAdd,handleDelete}) => {

    const[added,setAdded] = useState(false)

    const clickAdd = () => {
        handleAdd ()
        setAdded(true)
    }

    const clickRemove = () => {
        handleDelete ()
        setAdded(false)
    }

  return (
    <><div className="card">
        <img src={image} className="card-img" alt={title}></img>
        <div className="card-content">
        
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
            <p className="card-price">{price}</p>
            {added 
                ? <button 
                type="button" 
                className="button-remove"
                onClick={clickRemove}
                >   
                    Remove from cart
                </button>
                : <button 
                type="button" 
                className="button-add"
                onClick={clickAdd}
                > 
                    Add to cart 
                </button>
            }
        </div>
        
        

    </div>
    </>
  )
}
