import styled from 'styled-components'

export const AuthLoginWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  
  h1 {
    font-weight: 700;
    font-size: 18px;
    color: var(--color-black);
    margin-bottom: 12px;
  }

  p {
    font-weight: 200;
    font-size: 1rem;
    color: var(--color-black);
  }

  span {
    font-weight: 100;
    font-size: .8rem;
    color: rgba(0,0,0,.4);
  }

  & .header {
    display: flex; 
    flex-flow: row nowrap;
    align-items: center;
  }
`