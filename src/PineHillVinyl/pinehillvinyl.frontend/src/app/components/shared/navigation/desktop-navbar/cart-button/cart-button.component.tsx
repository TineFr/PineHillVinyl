import { ShoppingCartOutlined } from '@material-ui/icons'
import { useNavigate } from 'react-router-dom';
import {Amount} from './cart-button.styled'

const CartButton = () => {
  const navigate = useNavigate();
  const handleNavigation =  () =>{
    navigate('/cart');
  
  }
  return (
    <div onClick={() => handleNavigation()}>
    <Amount badgeContent={3} color='primary' >
        <ShoppingCartOutlined></ShoppingCartOutlined>
    </Amount>
    </div>
  )
}

export default CartButton