import styled from 'styled-components/macro'
import {colors, screens} from '@styles/variables'

export const Container = styled.div`
margin-top: 30px;
height: auto;
margin-bottom: 100px;


`

export const Title = styled.div`

font-size: calc(30px + 5vw) ;
text-align: center;
display: flex;
justify-content: center;
flex-direction: column;
color: #151515;

span{
    z-index:3;
    position: relative;
}

&::after{
     content:"";
     width:calc(150px + 10vw);
     height: 3vw;
     background-color: ${colors.red};
     margin: auto;
     transform: translate(5vw, -4vw) rotate(-1.3deg);

     
    @media ${screens.tablet}{
        height: 2vw;
        transform: translate(5vw, -3vw) rotate(-1.3deg);
    
    }

    @media ${screens.laptop}{
        height: 1vw;
        width:calc(150px + 15vw);
        transform: translate(5vw, -2vw) rotate(-1.3deg);
    
    }
}

`
export const ProductsWrapper = styled.div`
display: flex;
align-items: center;
margin-top: 20px;
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

    @media ${screens.tablet}{
        width: 17vw;
        flex: 0 0 17vw;
        margin: 10px;
    }

    @media ${screens.laptopL}{
    width: 14vw;
    flex: 0 0 14vw;
    margin: 15px;
    }

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

            @media ${screens.tablet}{
                font-size: 3vw;
                }
        }

        h2{

            font-size: 5vw;
            @media ${screens.tablet}{
                font-size: 2vw;
                }
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

            @media ${screens.tablet}{
                font-size: 2vw;
                }

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