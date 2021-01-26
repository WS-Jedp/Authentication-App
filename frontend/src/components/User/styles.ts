import styled, { StyleSheetManagerProps } from 'styled-components'

interface PropsUserWrapper extends StyleSheetManagerProps {
  width?: Number;
  height?: Number;
}

export const UserWrapper = styled.div`
  position: relative;
  width: auto;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  cursor: pointer;

  & image {
    width: ${ (props:PropsUserWrapper) => props.width ? `${props.width}` : '36px'};
    height: ${ (props:PropsUserWrapper) => props.height ? `${props.height}` : '36px'};
    overflow: hidden;
    object-fit: cover;
    border-radius: 6px;
    background-color: var(--color-gray);
    margin-right: 12px;
  }

  h3 {
    font-size: 16px;
    color: var(--color-black);
    font-weight: 400;
  }
`

export const UserMenuWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  height: auto;
  padding: 12px;
  background-color: #fff;
  box-shadow: 0 0 12px 1px rgba(0,0,0,.15);
  top: 42px;
  border-radius: 6px;
  overflow: hidden;
  transition .3s ease-in-out;
`