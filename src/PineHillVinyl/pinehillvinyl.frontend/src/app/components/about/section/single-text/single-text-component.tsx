import React from 'react'
import {Section, Message, Title} from './single-text-component-styled'

const SingleText = (props:any) => {
    const {direction, message} = props
  return (
    <Section contentDirection={direction}>
    <Title/>
    <Message>{message}</Message> 
    </Section>
  )
}

export default SingleText