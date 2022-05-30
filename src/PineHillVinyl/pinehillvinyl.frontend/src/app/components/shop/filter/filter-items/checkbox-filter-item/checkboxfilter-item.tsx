import {Container, Title, Selection } from './checkboxfilter-item-styled'

const CheckboxFilterItem = (props:any) => {
  return (
    <Container>
        <Title>Test</Title>
        <Selection>
        <input type="checkbox" name="vehicle1" value="Bike"/>
        <label htmlFor="vehicle1"> I have a bike</label><br></br>
        <input type="checkbox" name="vehicle1" value="Bike"/>
        <label htmlFor="vehicle1"> I have a bike</label><br></br>
        <input type="checkbox" name="vehicle1" value="Bike"/>
        <label htmlFor="vehicle1"> I have a bike</label><br></br>
        <input type="checkbox" name="vehicle1" value="Bike"/>
        <label htmlFor="vehicle1"> I have a bike</label><br></br>
      
        </Selection>
    </Container>
  )
}

export default CheckboxFilterItem