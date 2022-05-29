import {Container, SortSelection, SortIcon} from './sort-products-component-styled'
import {SortCategories as data} from '../../../../data/sort-categories'

const SortProducts = () => {
  return (
    <Container>
        <SortSelection show={true} >
        {data.map((item, index) => {
                return (
                    <option key={index} value={item.name}>{item.name} </option>
                )             
                    })}



        </SortSelection>
        <SortIcon></SortIcon>
    </Container>
  )
}

export default SortProducts