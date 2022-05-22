import {Container, TitleContainer, Title, Event} from './events-styled'

const Events = () => {
  return (
    <Container>
        <TitleContainer>
            <Title data-aos="fade-up" data-aos-once="true"><span>Upcoming events</span></Title>
            </TitleContainer>
            <Event data-aos="fade-right" data-aos-delay="100"  data-aos-once="true"data-aos-offset="500" side="right" >          
            <img src={require('../../../../assets/images/event1.png')}></img>
            </Event>   
            <Event data-aos="fade-left" data-aos-delay="100" data-aos-once="true" data-aos-offset="500" side="left" >  <img src={require('../../../../assets/images/event2.png')}></img></Event> 
            <Event data-aos="fade-right"side="right" data-aos-offset="500" data-aos-once="true"><img src={require('../../../../assets/images/event2.png')}></img></Event>
    </Container>
  )
}

export default Events