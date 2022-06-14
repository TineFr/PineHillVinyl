import { ShoppingCartOutlined } from '@material-ui/icons'
import { useNavigate } from 'react-router-dom';
import { getUserCart } from '../../../../../redux/slices/cartSlice';
import { useAppDispatch, useAppSelector } from '../../../../../hooks/redux/hooks';
import {Amount} from './cart-button.styled'
import { useEffect } from 'react';

const CartButton = () => {
  const navigate = useNavigate();

  const {amountOfProducts, cart} = useAppSelector((state) => state.cart);
  const {user, isAuthenticated} = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const handleNavigation =  () =>{
    navigate('/cart');
  }

  useEffect(() =>{
    if (isAuthenticated){
      dispatch(getUserCart(user!.sub));
    }
  }, [isAuthenticated])


  return (
    <div onClick={() => handleNavigation()}>
    <Amount badgeContent={cart?.items.length} color='primary' >
        <ShoppingCartOutlined></ShoppingCartOutlined>
    </Amount>
    </div>
  )
}

export default CartButton