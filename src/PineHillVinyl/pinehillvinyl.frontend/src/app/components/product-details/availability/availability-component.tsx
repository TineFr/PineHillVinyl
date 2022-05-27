import React from 'react'
import {AvailabilityComponent, Node, Container} from './availability-component-styled'
const Availability = () => {
  return (
      <Container>
    <AvailabilityComponent>    
       <Node /> 
       Available          
    </AvailabilityComponent>
    </Container>
  )
}

export default Availability