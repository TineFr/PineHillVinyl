import styled from 'styled-components/macro'
import {colors, screens} from '@styles/variables'
import Marquee from 'react-fast-marquee'


export const Title = styled.div`
display: flex;
flex-direction: column;
padding-top: 20px;
width: 70vw;
text-align:end;
color: ${colors.black};

@media ${screens.laptop}{
            width: 37vw;
        }

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
     background-color: ${colors.red};
     margin-top: -5vw;   

     @media ${screens.laptop}{
            height: 2vw;
            margin-top: -2vw; 
            margin-left: 50px;
        }
     
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
margin-top: -90px;
margin-right: 60px;
color: white;
font-size: 4vw;
z-index:5;
text-decoration: 3px underline  ${colors.red};
padding-left: 10px;
padding-right: 10px;
padding-top: 10px;

}

@media ${screens.laptop}{
top: 0;
margin-top: 10px;
}

`


export const ProductsWrapper = styled.div`
display: flex;
align-items: center;
margin-top: 30px;
overflow-x: auto;
width: auto;


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
export const MarqueeContainer = styled(Marquee)`
.marquee{
    min-width: initial !important;
    
}
`
export const Container = styled.div`
height: auto;
margin-bottom: 40px;
overflow: hidden;


@media ${screens.laptopL}{
            margin-top: 8vh;
            margin-bottom: 100px;
        }
`

