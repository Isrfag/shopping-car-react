import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled } from '@mui/material/styles';
import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import '../styles/navbar.css'
export const NavBarComponent = () => {

    const {purchaseList} =  useContext(CartContext)

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
          right: -3,
          top: 13,
          border: `2px solid ${theme.palette.background.paper}`,
          padding: '0 4px',
        },
      }));

  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
           <div className='container-fluid'>
            <NavLink to='/' className="navbar-brand" href="#">Cart</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
    
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
             <li className="nav-item active">
                <NavLink to='/' className="nav-link" href="#">Buy</NavLink>
                </li>
            </ul>

            <div className="Icon">
                <NavLink to='/cart'>
                <IconButton aria-label="cart">
                    <StyledBadge badgeContent={purchaseList.length} color="secondary">
                        <ShoppingCartIcon />
                    </StyledBadge>
                </IconButton>
                </NavLink>
             </div>
             </div>    
        </div>
    </nav></>
  )
}
