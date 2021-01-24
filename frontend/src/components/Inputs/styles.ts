import styled from 'styled-components'

export const InputTextWrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  width: 100%;
  height: 42px;
  overflow: hidden;
  padding: 6px;
  border-radius: 6px;
  border: 2px solid rgba(0,0,0,.2);
  margin: 6px 0;

  input[type="text"], input[type="email"], input[type="password"] {
    width: 100%;
    padding: 12px;
    color: rgba(0,0,0,.6);
    outline: none;
    border: none;
  }
`