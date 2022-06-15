import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'src/app/hooks/redux/hooks';
import { GenreModel } from 'src/app/models';
import { getGenres } from 'src/app/redux/slices/genreSlice';
import { getByGenre } from 'src/app/redux/slices/productSlice';
import {Container, List, Genre} from './filter-component-styled'
import CheckboxFilterItem from './filter-items/checkbox-filter-item/checkboxfilter-item'
const GenreFilter = () => {
  const dispatch = useAppDispatch();
  const [data, setData] = useState<GenreModel[]>()
  const {genres} = useAppSelector((state) => state.genre);


  useEffect(() =>{
    dispatch(getGenres());   

}, [dispatch])

useEffect(() =>{
  if(genres){
    setData(genres);
  }  

}, [genres])
  return (
    <Container>
      <h1>GENRES</h1>
        <List>
        {genres?.map((item : any, index : number) => {
                return (
                    <Genre key={index}>
                      <a onClick={() => dispatch(getByGenre(item.id))}>{item.name}</a>
                    </Genre>
                )             
                    })}
        </List>
    </Container>
  )
}

export default GenreFilter