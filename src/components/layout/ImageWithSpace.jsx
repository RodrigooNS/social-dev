import styled from "styled-components"

const WIDTH_BREAK = '600px'
const BACKGROUND_IMG = 'coffee-background.jpg'

const StyledFlex = styled.div`
  display: flex;
`

const StyledImage = styled.div`
  background-image: url('/${BACKGROUND_IMG}');
  background-position: center;
  background-repeat: no-repeat;


  width: 100%;
  height: 100vh;

  @media (max-width: ${WIDTH_BREAK}) {
    display: none;
  }
`

const StyledContainer = styled.div`
  background-color: white;
  padding: 30px;

  @media (min-width: ${WIDTH_BREAK}) {
    min-width: calc(${WIDTH_BREAK} - 60px);
  }

  @media (max-width: ${WIDTH_BREAK}) {
    width: 100%;
  }
`

export default function ImageWithSpace ({ children }) {
  return (
    <StyledFlex>
      <StyledImage />
      <StyledContainer>
        {children}
      </StyledContainer>
    </StyledFlex>
  )
}