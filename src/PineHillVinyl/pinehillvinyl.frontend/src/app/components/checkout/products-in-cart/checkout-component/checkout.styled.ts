import styled from 'styled-components/macro'
import {colors} from '@styles/variables'


export const Container = styled.div`
display: flex;
width: 100%;
justify-content: flex-end;
flex-direction: row;
align-items: center;
margin-top: 2rem;

`

export const TotalPrice = styled.div`
margin: 2rem;
font-size: 2rem;

`

export const CheckoutButton = styled.button`
background-color: ${colors.black};
border: none;
padding: 1rem 2rem;
/* margin-top: 2rem; */
font-size: .9rem;
letter-spacing: .1em;
line-height: 1;
color:  ${colors.white};
cursor: pointer;
font-family: "onyx";
margin-right: 5vmin;
font-size: 1.4rem;


`
