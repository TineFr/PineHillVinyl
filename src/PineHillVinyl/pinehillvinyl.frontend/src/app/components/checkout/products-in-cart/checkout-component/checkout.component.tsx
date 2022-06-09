import {Container, TotalPrice, CheckoutButton} from './checkout.styled'

const CheckoutComponent = () => {
  return (
    <Container>
      <TotalPrice>Total price: $30</TotalPrice>
      <CheckoutButton>Checkout</CheckoutButton>
    </Container>
  )
}

export default CheckoutComponent