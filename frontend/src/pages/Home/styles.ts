import styled from 'styled-components'

export const HomeHeaderWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;

  & h2 {
    font-weight: 400;
  }
  & p {
    color: rgba(0,0,0,.6);
  }
`