import {Container, Orders, AccountDetails, LogoutButton} from './account.styled'
import {CheckoutButton} from '../checkout/products-in-cart/checkout-component/checkout.styled'
import { useAppDispatch, useAppSelector } from 'src/app/hooks/redux/hooks';
import { logout } from 'src/app/redux/slices/authSlice';
import { Navigate, useNavigate } from 'react-router-dom';
import { resetCart } from 'src/app/redux/slices/cartSlice';

const AccountComponent = () => {

  const dispatch = useAppDispatch();
  const {isAuthenticated} = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleClick = (e:any) =>{
    e.preventDefault();
    dispatch(logout());
    dispatch(resetCart())
    navigate(-1);
  }
  return (
    <Container>
        <CheckoutButton onClick={handleClick}>Logout</CheckoutButton>
        <Orders></Orders>
        <AccountDetails></AccountDetails>    
    </Container>
  )
}

export default AccountComponent