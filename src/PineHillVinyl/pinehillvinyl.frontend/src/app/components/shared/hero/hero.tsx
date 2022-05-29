import {Container} from './hero-styled'

const Hero = (props:any) => {
  const title = props.title;
  return (
    <Container>{title}</Container>
  )
}

export default Hero