import styled from 'styled-components/macro'

export const Container = styled.div`
top: 0;
bottom: 0;
left: 0;
right: 0;
background-color: lightgrey;
opacity: 0.6;
position: absolute;
z-index:300;
`

export const Message = styled.div`
    position: absolute;
    top: 50%;  
    left: 50%; 
    transform: translate(-50%, -50%);
    background-color: white;
    width: 500px;
    height: 200px;
    text-align: center;
    z-index:301;


`