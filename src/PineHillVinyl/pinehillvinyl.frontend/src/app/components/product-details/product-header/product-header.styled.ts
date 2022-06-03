import styled from 'styled-components/macro'
import {colors, screens} from '@styles/variables'
export const Container = styled.div`
@media ${screens.laptop} {
    display:grid;
    grid-template-columns: 1fr  1fr;
    grid-template-rows: 1px auto auto auto;
    margin: 0px 100px 100px 100px;
}
`

export const Header = styled.div`
display:flex;
flex-direction:column;
width: 80%;
margin:auto;
grid-column: 2;
grid-row:2;
`


export const Test = styled.div`
grid-column: 2;
grid-row:2;
height:30px;
`

export const ImageContainer = styled.div`
width: 60%;
margin: auto;
margin-top: 15px;
img{
    object-fit: cover;
    width: 100%;
}

@media ${screens.laptop} {
    margin-top: 0px;
    grid-row-start: 1;
    grid-row-end: 2;
}
`

export const Artist = styled.div`
background-color: ${colors.red};
width: 90%;
font-size: 2rem;
padding: 10px;
max-width: 400px;

@media ${screens.laptop} {
    font-size: 5rem;
}


`

export const Title = styled.div`
background-color: ${colors.black};
margin-left: 10px;
margin-top: -5px;
color: ${colors.white};
font-size: 2rem;
padding: 7px;
max-width: 500px;
@media ${screens.laptop} {
    font-size: 4rem;
    margin-top: 5px;
    margin-left: 20px;
}
`

export const ProductDetails = styled.div`
@media ${screens.laptop} {
 grid-column: 2;
 grid-row: 3;
}
`

export const Price = styled.div`
font-size: 10vmin;
padding-right: 40px;
text-align: right;
grid-column: 2;

@media ${screens.laptop} {
    padding-right: 100px;
}
`
export const Description = styled.div`
padding-left: 40px;
width: 90%;
word-break: break-word;
hyphens: manual;
h1{
    border-bottom: 1px solid black;
    width: 90%;
    margin-bottom: 5px;
}
span{
    max-width: 200px;
    word-break: break-word;
}
`

export const Specifications = styled.div`
margin-top: 10px;
padding-left: 40px;
grid-column: 2;
p{
    margin-top: 5px;
}
h1{
    border-bottom: 1px solid black;
    width: 90%;
    margin-bottom: 5px;
}
`

export const TrackList = styled.div`
margin-top: 10px;
padding-left: 40px;
p{
    margin-top: 5px;
}
h1{
    border-bottom: 1px solid black;
    width: 90%;
    margin-bottom: 5px;
}
@media ${screens.laptop} {
    grid-column: 1;
    grid-row: 4;
}

`