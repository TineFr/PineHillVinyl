import {Section, Message, Title, Wrapper, Image} from './image-text-component-styled'

const ImageText = (props:any) => {
    const {imageFirst, position, message, title, image} = props
    return (
      <Section data-aos="fade-up" data-aos-once="true"position={position} imageFirst={imageFirst}>
        <Wrapper>
          <Title position={position}>{title}</Title>
          <Message position={position}>{message}</Message> 
      </Wrapper>
      <Image>
        <img src={process.env.PUBLIC_URL + image}></img>
      </Image>
      </Section>
    )
  }

export default ImageText