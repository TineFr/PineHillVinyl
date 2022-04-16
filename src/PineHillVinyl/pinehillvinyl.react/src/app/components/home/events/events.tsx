import {Container, TitleContainer, Title, Event} from './events-styled'

const Events = () => {
  return (
    <Container>
        <TitleContainer>
            <Title data-aos="fade-up"><span>Upcoming events</span></Title>
            </TitleContainer>
            <Event data-aos="fade-right" side="right"></Event>  
            <Event data-aos="fade-left" side="left"></Event> 
            <Event data-aos="fade-right"side="right"></Event> 
    </Container>
  )
}

export default Events