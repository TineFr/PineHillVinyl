import {Container, TitleContainer, Title, Date, Event} from './events.styled'
import {colors} from '@styles/variables'
const Events = () => {
  return (
    <Container>
        <TitleContainer>
            <Title data-aos="fade-up" data-aos-once="true"><span>Upcoming events</span></Title>
            </TitleContainer>
            <Event data-aos="fade-right" data-aos-delay="100"  data-aos-once="true"data-aos-offset="500" side="right" >  
              <Date left={false} color={colors.black}>24/03</Date>        
              <img src={require('../../../../assets/images/event1.png')}></img>
            </Event>   
            <Event data-aos="fade-left" data-aos-delay="100" data-aos-once="true" data-aos-offset="500" side="left">
              <Date left={true} color={colors.black}>24/03</Date>            
              <img src={require('../../../../assets/images/event2.png')}></img>
            </Event> 
            <Event data-aos="fade-right"side="right" data-aos-offset="500" data-aos-once="true">
              <Date left={false} color={colors.black}>24/03</Date>   
              <img src={require('../../../../assets/images/event4.jpg')}></img>
            </Event>
    </Container>
  )
}

export default Events