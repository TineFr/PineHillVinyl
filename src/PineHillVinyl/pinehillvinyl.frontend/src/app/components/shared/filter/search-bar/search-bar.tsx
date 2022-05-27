
import {Container, SearchBoxContainer, SearchBox, SearchIcon} from './search-bar-styled'



const SearchBar = () => {
  return (
    <Container>
        <SearchBoxContainer>
        <SearchBox type="text" placeholder='Type anything...' maxLength ={65}/>
        <SearchIcon/>
        </SearchBoxContainer>
    </Container>
  )
}

export default SearchBar