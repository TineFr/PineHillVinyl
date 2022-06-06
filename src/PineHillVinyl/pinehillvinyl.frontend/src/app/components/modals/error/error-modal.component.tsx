import {Container, Message} from './error-modal.styled'

const ErrorModal = (props:any) => {
  const message = props.message;
  return (
    <>
    <Container>
    </Container>
          <Message>{message}</Message>
          </>
  )
}

export default ErrorModal