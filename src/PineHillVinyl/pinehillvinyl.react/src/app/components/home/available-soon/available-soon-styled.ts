import styled from 'styled-components/macro'
import {colors, screens} from '@styles/variables'


export const Container = styled.div`
height: 70vh;
overflow: hidden;
`

export const Title = styled.div`
display: flex;
flex-direction: column;
padding-top: 20px;
width: 70vw;
text-align:end;
color: ${colors.black};

    span{
        z-index:3;
        font-size: 20vw;

        @media ${screens.mobileL}{
            font-size: 15vw;
        }

        @media ${screens.laptop}{
            font-size: 8vw;
        }
    }

 &::after{
     content:"";
     height: 7vw;
     width: 100%;
     background-color: ${colors.red};;
     margin-top: -5vw;    
 }
`
export const PreOrder = styled.div`

display:none;

@media ${screens.tablet}{
display: flex;
width: 7vw;
height: 17vw;
background-color:  ${colors.black};
position: absolute; 
right: 0;
margin-right: 30px;
color: white;
font-size: 4vw;
z-index:2;
text-decoration: 3px underline  ${colors.red};
padding-left: 10px;
padding-right: 10px;
padding-top: 10px;
}

`



export const ProductsWrapper = styled.div`
display: flex;
align-items: center;
margin-top: 30px;
overflow-x: auto;
::-webkit-scrollbar {   
     display: none;
     }
`

export const Product = styled.div`

    width: 35vw;
    flex: 0 0 35vw;
    margin: 4px;
    position: relative;

      img{
            width: 100%;
            object-fit: cover;
        } 

        h1{
            position: absolute;
            top: 0;
            margin-left: 3px;
            opacity: 0;
            font-size: 7vw;
            width: 100%;
            overflow-wrap: break-word;
        }

        h2{

            font-size: 5vw;


        }

        p{
            text-align: center;
            opacity: 0;
            position: absolute;
            margin-left: auto;
            margin-right: auto;
            margin-top: 50%;
            left: 0;
            right: 0;
            top: 0;
            font-size:8vw;

        }

 &:hover img{
     opacity: 0.5;
 }

 &:hover h1{
     opacity: 1;
 }

 &:hover p{
     opacity: 1;
 }

`


