import {loadStripe} from '@stripe/stripe-js';
import {Elements, CardElement, useStripe, useElements} from '@stripe/react-stripe-js'
import { useAppDispatch, useAppSelector } from 'src/app/hooks/redux/hooks';
import { Container, CardContainer, Button, Label } from './payment.styled';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserCart } from 'src/app/redux/slices/cartSlice';
const PaymentComponent = () => {

  const {cart} = useAppSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const stripe = useStripe();
  const elements = useElements();

  const {isAuthenticated, user} = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (!isAuthenticated){
       return navigate("/login");
    }
 },[isAuthenticated]);


  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` }
  };

  const handlePayment =  async (e : any) =>{
    e.preventDefault();
    const cardEl = elements?.getElement(CardElement);
    const res = await axios.post("http://localhost:4000/api/v1/orders/stripe", {cart}, config);
    const {client_secret : clientSecret} = res.data;

    const {paymentIntent} = await stripe!.confirmCardPayment(clientSecret, {
      payment_method:{
        card: cardEl!
      }
    })
    if (paymentIntent) {

      dispatch(getUserCart(user!.sub));
      navigate('/');

  
    };
  }
  

  return (
    <Container>
   <form onSubmit={handlePayment}>

        <Label htmlFor='card-element'>Place order</Label>
        <CardContainer>
        <CardElement  id='card-element'/>
        </CardContainer>
        <Button type='submit'>Pay</Button>
   </form>
   </Container>
   
    
  )
}



const PaymentGateway = () => {
  const stripePromise = loadStripe('pk_test_51L8jRUGiOJlUonpfWdtDttuwdRfMbHFix7d2AeZ8gBaGLyhiOnFVVkkxHbX44wHpGNArOkAC6WxF2p0YxmXhuBJh00XQ4V6Mgg')
  return (
    <Elements stripe={stripePromise}>
      <PaymentComponent/>
    </Elements>

  )
}

export default PaymentGateway;
