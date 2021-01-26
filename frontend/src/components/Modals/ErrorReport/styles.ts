import styled, {keyframes} from 'styled-components'

const FadeAnimation = keyframes`
  0% {
    opacity: 0;
    left: -10%;
  }
  
  20% {
    opacity: 1;
    left: 2%;
  }
  80% {
    opacity: 1;
    left: 2%;
  }

  100% {
    opacity: 0;
    left: -10%;
  }
`

export const ErrorReportContainerWrapper = styled.article`
  position: absolute;
  display: flex;
  flex-flow: column nowrap;
  bottom: 4%;
  min-width: 210px;
  width: 15%;
  height: auto; 
`

export const ErrorReportWrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  min-width: 210px; 
  width: 100%;
  max-height: 360px;
  min-height: auto;
  height: auto; 
  padding: 21px;
  border-radius: 12px;
  background-color: #ff474763;
  box-shadow: 0 0 19px 1px rgba(0,0,0,.12);
  margin-bottom: 9px;
  animation: 4s ${FadeAnimation} ease-in-out forwards;
`
