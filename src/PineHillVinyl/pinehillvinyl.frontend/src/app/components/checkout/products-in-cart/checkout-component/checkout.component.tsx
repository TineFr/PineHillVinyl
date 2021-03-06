import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'src/app/hooks/redux/hooks';
import {Container, TotalPrice, CheckoutButton} from './checkout.styled'

const CheckoutComponent = () => {

  const navigate = useNavigate();
  const {totalPrice, amountOfProducts} = useAppSelector((state) => state.cart);

  const handleClick = () =>{
    navigate('/checkout');
  }

  return (
    <Container>
      <TotalPrice>Total price: €{totalPrice ? totalPrice : amountOfProducts}</TotalPrice>
      <CheckoutButton onClick={handleClick}>Checkout</CheckoutButton>
    </Container>
  )
}

export default CheckoutComponent