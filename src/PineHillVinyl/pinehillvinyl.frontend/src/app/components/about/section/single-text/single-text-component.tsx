
import {Section, Message, Title, Wrapper} from './single-text-component-styled'

const SingleText = (props:any) => {
  const {position, message, title} = props
  return (
    <Section data-aos="fade-up" data-aos-once="true" position={position}>
      <Wrapper>
        <Title position={position}>{title}</Title>
        <Message position={position}>{message}</Message> 
    </Wrapper>
    </Section>
  )
}

export default SingleText