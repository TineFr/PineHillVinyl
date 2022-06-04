import {Container, Loading} from './spinner.styled'

const Spinner = (props: any) => {
  return (
    <Container show={props.busy}>
        <Loading/>


    </Container>
  )
}

export default Spinner