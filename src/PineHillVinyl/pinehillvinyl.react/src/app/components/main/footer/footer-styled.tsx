import styled from 'styled-components/macro'

export const Container = styled.div`
display: flex;
background: #151515;
font-family: "onyx";
height: auto;

flex-direction: column;
justify-content: space-between;
overflow: hidden;
position: relative;
`

export const Column = styled.div`
display: flex;
flex-direction: column;


a{
    color: white;
    text-decoration: none;
    font-size: calc(0.2vw + 1vh + 1vmin);
    margin-bottom: 5px;


    &:hover{
    color: #b83737;

    }
}

`

export const Logo = styled.div`

width: 100%;
text-align: center;

img{
    height: calc(50px + 9vw);
    /* width: auto;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto; */
}
`




export const Socials = styled.div`


`


export const Title = styled.h1`
color: #b83737;
font-size: calc(1vw + 1vh + 1vmin);
font-weight: normal;

`


export const Wrapper = styled.div`
display:flex;
justify-content: space-evenly;
width: 100%;
margin-top: 30px;
/* margin-left: 10px; */

`