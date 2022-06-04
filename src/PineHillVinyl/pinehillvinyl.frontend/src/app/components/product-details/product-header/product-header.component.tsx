import {Container, Header, Artist, Title, ImageContainer, ProductDetails, Price, Description, Specifications,TrackList, Test} from './product-header.styled'

const ProductHeader = () => {
    return (
      <Container>
        <Header>
          <Artist>Guns n Roses</Artist>
          <Title>Use your Illusion 2 (2LP-NEW)</Title>
        </Header>
        <Test></Test>
        <ImageContainer>
      <img src={process.env.PUBLIC_URL + "/records/record1.jpg"}  loading="lazy"/>
      </ImageContainer>
      <ProductDetails>
        <Price>€29</Price>
        <Description>
          <h1>Description</h1>
         <span> efge,rjgcsdjfgksnjd vegjkldwcnjfkvlnjvhgkvnjscejkrknjfgk csl,dkgjvlsdkjgklrjg lkergjvlrnkgjl ernfjgkl,jgk sjrfkglnjrtklgnjkldrttjgkrenrv  erltntgjenlrvtkgj rlntjerlfktngjl ertngjertkgjl jgrkletgevlrthk</span> </Description>
        <Specifications>
        <h1>Specifications</h1>
              <p>Label: sdfg</p>
              <p>Label: sdfg</p>
              <p>Label: sdfg</p>
              <p>Label: sdfg</p>
        </Specifications>
      </ProductDetails>
      <TrackList>
      <h1>Tracklist</h1>
      <p>Label: sdfg</p>
              <p>Label: sdfg</p>
              <p>Label: sdfg</p>
              <p>Label: sdfg</p>
              <p>Label: sdfg</p>
              <p>Label: sdfg</p>
              <p>Label: sdfg</p>
              <p>Label: sdfg</p>

      </TrackList>

      </Container>
    )
  }
  
  export default ProductHeader