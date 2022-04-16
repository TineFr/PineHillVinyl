import styled from 'styled-components/macro'


interface Props{
    randomPadding: number,
    randomRotation : number
}
export const TagsContainer = styled.div`
display: flex;
margin-top: 90px;
justify-content: flex-end;
align-items: center;
right: 0;
`

export const TagsWrapper = styled.div`
max-width:650px;
flex-wrap: wrap;
display: flex;
`


export const TagItem = styled.div<Props>`
padding:${props => props.randomPadding}px;
transform: rotate(${props => props.randomRotation}deg);
height: 40px;
color: white;
background-color: #bcc88e;
margin:5px;
line-height:20px;
display: flex;
align-items: center;
justify-content: center;
font-family: Arial, Helvetica, sans-serif;
transition: all 0.5s ease-in-out;
cursor:pointer;

 &:hover{
    transform: rotate(0deg);
    background-color: #414141;
 }
`
