import {Container, Form, Input, InputSmall, TextArea} from './contact-form-styled'

const ContactForm = () => {
  return (
    <Container>
        <Form>
            <InputSmall type='text' name='name'placeholder='Name'/>
            <InputSmall type='text' name='firstName' placeholder='First Name'/>
            <Input type='email' name='email' placeholder='E-mail'/><br/>
            <TextArea name='message' placeholder='Message'/>
        </Form>



    </Container>

  )
}

export default ContactForm