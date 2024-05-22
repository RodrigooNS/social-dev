import styled from "styled-components"

const WIDTH_BREAK = '700px'
const BACKGROUND_IMG = 'coffee-background.jpg'

const StyledFlex = styled.div`
  display: flex;
`

const StyledImage = styled.div`
  background-image: url('/${BACKGROUND_IMG}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;


  width: 100%;
  height: 100vh;

  @media (max-width: ${WIDTH_BREAK}) {
    display: none;
  }
`

const StyledContainer = styled.div`
  background-color: ${props => props.theme.white};
  padding: 30px 50px;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 60px);
  overflow-y: auto;
  width: 60%;

  @media (min-width: ${WIDTH_BREAK}) {
    min-width: calc(${WIDTH_BREAK} - 100px);
  }

  @media (max-width: ${WIDTH_BREAK}) {
    width: 100%;
  }

  &:before, &:after {
    content: '';
    margin: auto;
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