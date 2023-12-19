import {Routes,Route,Navigate} from 'react-router-dom'
import {NavBarComponent} from './components/NavBarComponent'
import { BuysPage } from './pages/BuysPage'
import { CartPage } from './pages/CartPage'
import { ProductProvider } from './context/ProductProvider'
import { CartProvider } from './context/CartProvider'
export const CartApp = () => {
  return (
    
    <ProductProvider>
      <CartProvider>
        <NavBarComponent></NavBarComponent>
          <div className='container'>
            <Routes>
              <Route path='/' element = {<BuysPage></BuysPage>}></Route>
              <Route path='/cart'  element= {<CartPage></CartPage>}></Route>
              <Route path='/*' element={<Navigate to='/'/>}></Route> 
            </Routes>
          </div>
        </CartProvider>
      </ProductProvider>
  )
}
