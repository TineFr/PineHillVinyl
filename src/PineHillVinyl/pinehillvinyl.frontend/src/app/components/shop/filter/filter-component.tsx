import {Container} from './filter-component-styled'
import CheckboxFilterItem from './filter-items/checkbox-filter-item/checkboxfilter-item'
const Filter = () => {
  return (
    <Container>
      <h1>Filters</h1>
<CheckboxFilterItem/>
<CheckboxFilterItem/>
<CheckboxFilterItem/>
<CheckboxFilterItem/>
<CheckboxFilterItem/>
    </Container>
  )
}

export default Filter