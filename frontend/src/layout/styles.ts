import styled from 'styled-components'
import { StyleSheetManagerProps } from 'styled-components'

interface PropsLayout extends StyleSheetManagerProps {
  header: Boolean;
}

export const Layout = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: ${(props:PropsLayout) => props.header ? 'flex-start' : 'center'};
  align-items: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  & .layout-content {
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
    margin: auto;
  }
`