import styled from 'styled-components/macro'



export const Container = styled.ul`
height: 200px;
display: flex;
margin:auto;
flex-direction: row;
justify-content: center;
align-items: center;
`

export const Page = styled.li`
color: black;
font-family: "onyx";
list-style: none;

    button{
    width: 50px;
    height:50px;
    border: 1px solid lightgrey;
    background-color: white;
    }


`

export const ArrowButton = styled.button`
width: 50px;
height:50px;
border: 1px solid lightgrey;
background-color: white;
cursor: pointer;
 svg{
     font-size: 30px;
     color: #b03737;
 }
`

