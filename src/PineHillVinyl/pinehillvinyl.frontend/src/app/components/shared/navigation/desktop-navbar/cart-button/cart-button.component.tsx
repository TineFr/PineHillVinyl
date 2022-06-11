import { ShoppingCartOutlined } from '@material-ui/icons'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../../hooks/redux/hooks';
import {Amount} from './cart-button.styled'

const CartButton = () => {
  const navigate = useNavigate();

  const {amountOfProducts} = useAppSelector((state) => state.cart);
  const handleNavigation =  () =>{
    navigate('/cart');
  
  }
  return (
    <div onClick={() => handleNavigation()}>
    <Amount badgeContent={amountOfProducts} color='primary' >
        <ShoppingCartOutlined></ShoppingCartOutlined>
    </Amount>
    </div>
  )
}

export default CartButton