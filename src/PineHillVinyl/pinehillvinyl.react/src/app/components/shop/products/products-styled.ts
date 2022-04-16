import styled from 'styled-components/macro'


export const ProductsContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
font-family: "onyx";
`

export const ProductsWrapper = styled.div`
display: Grid;
margin-top: 20px;
width: 80%;
max-width: 2000px;
grid-template-columns: repeat(5,1fr);
text-align: center;
`

export const ProductsItem = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 10px;
/* margin-top: 20px; */
height: 350px;
width: 90%;
cursor: pointer;
`
export const ImageContainer = styled.div`
width: 100%;

  img{
      width: 100%;
      object-fit: cover;
  }
`

export const InfoContainer = styled.div`

background: #151515;
height: 60px;
width: 100%;
color: white;
text-align: start;
padding-left: 5px;
margin-top: 5px;


h1, h2{
  white-space: nowrap;
    overflow: hidden !important;
    text-overflow: ellipsis;
    font-weight: normal;

}

h1{
  font-size: 1.6rem;
}

  /* h1{
      margin-bottom:5px;
      text-align: center;
      font-family: "onyx";
      font-size:cover;
      font-size:25px;
      color: white;
      font-weight: normal;
  } */
`

