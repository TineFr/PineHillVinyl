
import styled from 'styled-components/macro';
import {colors} from '@styles/variables';




export const Container = styled.div`

height: 60px;
display: flex;
font-family: "onyx";
font-size: 1.7vw;
margin-top: 40px;
margin-bottom:40px;
justify-content: center;
`
export const Title = styled.div`
text-decoration: underline;
padding: 0px 40px;
border-right: 3px solid #B03737;
height: 100%;
display: flex;
align-items: center;

`
export const FilterItem = styled.div`
height: 100%;
display: flex;
align-items: center;
padding: 0px 30px;
border-right: 3px solid #B03737;

`
export const SearchBox = styled.input`
  width: 400px;
  height: 3rem;
  border-radius: 1.6rem;
  border: 2px solid black;
  outline: none;
`
export const ResetFilters = styled.div`
height: 100%;
display: flex;
align-items: center;
justify-content: space-evenly;
padding: 0px 20px;
gap: 15px;

 .test{
     transform:rotate(-50deg);
 }



`

export const ArrowDown = styled.div`
  width: 0; 
  height: 0; 
  margin-left: 10px;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 10px solid #B03737;



`

