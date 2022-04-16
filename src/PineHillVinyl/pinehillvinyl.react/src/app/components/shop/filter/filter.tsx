
import {Container, Title, FilterItem, SearchBox, ResetFilters, ArrowDown } from './filter-styled';
import {BsArrowCounterclockwise} from 'react-icons/bs'

const Filter = () => {
  return (
    <Container>
        <Title>Filter by</Title>
        <FilterItem>Genre<ArrowDown/> </FilterItem>
        <FilterItem>Time Period<ArrowDown/> </FilterItem>
        <FilterItem>Artist<ArrowDown/> </FilterItem>
        <FilterItem>Tags<ArrowDown/> </FilterItem>
        <FilterItem>Price<ArrowDown/> </FilterItem>
        <FilterItem><SearchBox placeholder=' Type anything...'/> </FilterItem>
        <ResetFilters><BsArrowCounterclockwise className='test'/> Reset Filters</ResetFilters>
    </Container>
  )
}

export default Filter