import {loadStripe} from '@stripe/stripe-js';
import {Elements, CardElement, useStripe, useElements} from '@stripe/react-stripe-js'
import { useAppDispatch, useAppSelector } from 'src/app/hooks/redux/hooks';
import { useEffect } from 'react';
import axios from 'axios';
const PaymentComponent = () => {

  const {cart} = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const stripe = useStripe();
  const elements = useElements();



  const handlePayment =  async (e : any) =>{
    e.preventDefault();
    const cardEl = elements?.getElement(CardElement);
    const res = await axios.post("http://localhost:4000/api/v1/stripe", {cart});
    const {client_secret : clientSecret} = res.data;

    const {paymentIntent} = await stripe!.confirmCardPayment(clientSecret, {
      payment_method:{
        card: cardEl!
      }
    })
    if (!paymentIntent) console.log('failed');
  }
  

  return (
   <form onSubmit={handlePayment}>
    <label htmlFor='card-element'>Place order</label>
    <CardElement  id='card-element'/>
    <button type='submit'>Pay</button>
   </form>
   
    
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
