import styled from 'styled-components/macro'

export const Container = styled.div`
display: flex;
background: #151515;
font-family: "onyx";
height: 400px;
flex-direction: column;
overflow: hidden;
`

export const Column = styled.div`
display: flex;
flex-direction: column;

a{
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
    margin: 5px;

    &:hover{
    color: #b83737;

    }

}

`

export const Logo = styled.div`

img{
    height: 250px;
    width: auto;
}
`




export const Socials = styled.div`


`


export const Title = styled.h1`
color: #b83737;
font-size: 1.5rem;
font-weight: normal;

`


export const Wrapper = styled.div`
display:flex;
justify-content: space-evenly;
width: 50%;
margin-top: 30px;

`