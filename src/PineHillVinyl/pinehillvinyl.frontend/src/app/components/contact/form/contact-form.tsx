import {Container, Form, Input, InputSmall, TextArea} from './contact-form-styled'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from '../../shared/spinner/spinner.component';
import { Submit } from '../../auth/authentication-form.styled';
 


const ContactForm = () => {

  const form = useRef<any>();

  const notify = () => toast("Email successfully sent!");
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e : any) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.sendForm('service_2nyx2n6', 'template_ev77j7x', form.current, 'FN5lrVqL-ekGQUsd_')
      .then((result : any) => {
          console.log(result.text);
          e.target.reset();
          setIsLoading(false);
          notify();
      }, (error : any) => {
          console.log(error.text);
      });
  };
  return (
    <Container data-aos="fade-up" data-aos-once="true">
       
        <Form ref={form} onSubmit={sendEmail}>
        <Spinner busy={isLoading} /> 
            <InputSmall type='text' name='user_name'placeholder='Name' required/>
            <InputSmall type='text' name='user_firstName' placeholder='First Name' required/>
            <Input type='email' name='user_email' placeholder='E-mail' required/><br/>
            <TextArea name='message' placeholder='Message' required/>
            <Submit type='submit'>Send</Submit>
            <ToastContainer />
        </Form>



    </Container>

  )
}

export default ContactForm