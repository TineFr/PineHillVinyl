import { useNavigate } from 'react-router-dom';
import {Container, TotalPrice, CheckoutButton} from './checkout.styled'

const CheckoutComponent = () => {

  const navigate = useNavigate();


  const handleClick = () =>{
    navigate('/checkout');
  }

  return (
    <Container>
      <TotalPrice>Total price: $30</TotalPrice>
      <CheckoutButton onClick={handleClick}>Checkout</CheckoutButton>
    </Container>
  )
}

export default CheckoutComponent