
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/app/hooks/redux/hooks';
import { getProductsSearch } from 'src/app/redux/slices/productSlice';
import {Container, SearchBoxContainer, SearchBox, SearchIcon} from './search-bar-styled'



const SearchBar = () => {

  const dispatch = useAppDispatch();
  const [search , setSearch] = useState<string>()
  const searchObject = {
    search : search,
    page : 1
  }
  const handleSearch = () =>{
    dispatch(getProductsSearch(searchObject));  
  }

  return (
    <Container>
        <SearchBoxContainer>
        <SearchBox type="text" placeholder='Type anything...' maxLength ={65} onChange={e => setSearch(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSearch()}/>
        <SearchIcon onClick={handleSearch}/>
        </SearchBoxContainer>
    </Container>
  )
}

export default SearchBar