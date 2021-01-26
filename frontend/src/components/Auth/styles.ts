import styled from 'styled-components'

export const AuthWrapper = styled.div`
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

    & a {
      color: #3292d3;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`

export const OptionsWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  margin: auto;
  margin: 12px 0;

  & .social-media-options {
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`