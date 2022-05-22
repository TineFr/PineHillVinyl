
import styled from 'styled-components/macro';
import {colors, screens} from '../../../../styles/variables'

interface Props{

  isInVisible? : boolean;
}


export const Container = styled.div`

height: 60px;
display: flex;
font-size: calc(12px + 1.5vw);
margin-top: 40px;
margin-bottom:40px;
overflow-x: scroll;
width: 100%;
color: ${colors.black};
::-webkit-scrollbar{
display: none;
}
`
export const Title = styled.div`
text-decoration: underline;
padding: 0px 40px;
border-right: 3px solid ${colors.red};
height: 100%;
display: flex;
align-items: center;

`
export const FilterItem = styled.div<Props>`
height: 100%;
display: ${props => props.isInVisible? "none" : "flex"};
align-items: center;
padding: 0px 30px;
border-right: 3px solid ${colors.red};
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

