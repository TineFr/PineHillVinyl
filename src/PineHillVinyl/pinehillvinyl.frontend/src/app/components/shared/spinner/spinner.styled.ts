import styled, {keyframes} from 'styled-components/macro'
import {colors} from '@styles/variables'

interface Props {
    show : boolean
}


const loadingAnimation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to { 
        transform: rotate(360deg);
    }
`


export const Container = styled.div<Props>`
top: 0;
bottom: 0;
left: 0;
right: 0;
position: absolute;
background-color: white;
opacity: 0.4;
display: ${props => props.show ? "initial" : "none"};
`

export const Loading = styled.div`
	width: 50px;
	height: 50px;
	margin: 110px auto 0;
	border:solid 10px ${colors.red};
	border-radius: 50%;
	border-left-color: transparent;
	border-top-color: transparent; 
	 -webkit-transition: all 0.5s ease-in;
    -webkit-animation-name: ${loadingAnimation}; 
    -webkit-animation-duration: 1s; 
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    	
    transition: all 0.5s ease-in;
    animation-name: ${loadingAnimation}; 
    animation-duration: 1s; 
    animation-iteration-count:  infinite;
    animation-timing-function: linear; 

`


 

