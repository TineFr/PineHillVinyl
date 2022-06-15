import styled from 'styled-components/macro'
import {screens, colors} from '@styles/variables'
import {ImCross} from 'react-icons/im'

export const Container = styled.div`
display:flex;
flex-direction: column;
width:  100%;
grid-row-gap: 20px;
padding: 30px 20px;
min-height: 500px;

@media ${screens.laptop} {
    width: 60%;
    min-height: 700px;
    margin: 0px 200px;
}
`

export const ProductCart = styled.div`
height: 170px;
width: 100%;
border: 1px solid black; 
position: relative;
display: grid;
grid-template-columns: 1fr 2fr 1fr;
padding: 5px;

`
export const RemoveButton = styled(ImCross)`
margin: 10px;
position: absolute;
top:0;
right: 0;
cursor:pointer;
`

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      width: 150px;
      height:150px;
  }


  @media ${screens.laptop}{
    img{
      width: 150px;
      height:150px;
  }
}


`
export const ProductWrapper = styled.div`
display:flex;
flex-direction:row;
@media ${screens.laptop}{
    display: grid;
    grid-template-rows: 3fr 1fr;
}
`


export const Title = styled.div`
width: 70%;
color: black;
text-align: center;
padding-left: 5px;
margin-top: 5px;
margin: auto;
font-size: 1.2rem;
 
`
export const Price = styled.div`
font-size: 2rem;
text-align: end;
`
export const Quantity = styled.div`
width: 20px;
display: flex;
justify-content: center;
align-items: center;
font-size: 2rem;
`

export const DetailsWrapper = styled.div`

display:flex;
flex-direction:row;
justify-content: flex-end;
width: 100%;
align-items: flex-end;


`

export const QuantityWrapper = styled.div`

border: none;
background-color: none;
display:flex;
flex-direction: row;
width: 150px;
justify-content: center;
`

export const Counter = styled.button`

border: none;
background-color: none;
width: 40px;
height: 40px;
margin:2px;
font-size: 1.5rem;
`


export const Test = styled.div`

display:flex;
flex-direction: row;
align-items: center;
justify-content: center;
`

