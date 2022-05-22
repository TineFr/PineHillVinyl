import {Container, TitleContainer, Title, Event} from './events-styled'

const Events = () => {
  return (
    <Container>
        <TitleContainer>
            <Title data-aos="fade-up"><span>Upcoming events</span></Title>
            </TitleContainer>
            <Event data-aos="fade-right" side="right" >          
            <img src={require('../../../../assets/images/event1.png')}></img>
            </Event>  
            <Event data-aos="fade-left" side="left" >  <img src={require('../../../../assets/images/event2.png')}></img></Event> 
            <Event data-aos="fade-right"side="right"> <img src={require('../../../../assets/images/event2.png')}></img></Event>
    </Container>
  )
}

export default Events