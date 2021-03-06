import styled, { StyleSheetManagerProps } from 'styled-components'

interface PropsButton extends StyleSheetManagerProps {
  primary?: Boolean;
  width?: String;
}

export const ButtonWrapper = styled.button`
  min-width: 210px;
  width: ${(props:PropsButton) => props.width ? `${props.width}` : '100%'};
  min-height: 30px;
  height: 40px;
  border: none;
  border-radius: 9px;
  background-color: ${(props:PropsButton) => props.primary ? '#3292d3' : 'var(--color-main)'};
  color: ${(props:PropsButton) => props.primary ? 'white' : 'var(--color-black)'};
  font-size: 15px;
  font-weight: 400;
  cursor: pointer;
  transition: .3s ease-in-out;
  margin: 12px 0;

  &:hover {
    opacity: .8;
  }
`

export const ButtonSocialWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid rgba(0,0,0,.3);
  border-radius: 50%;
  background-color: #fff;
  color: rgba(0,0,0,.4);
  cursor: pointer;
  transition: .3s ease-in-out;
  margin: 9px;

  &:hover {
    opacity: .8;
  }
`

export const MenuButtonWrapper = styled.button`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  width: auto;
  min-height: 40px;
  height: auto;
  background-color: #fff;
  border: none;
  padding: 9px;
  transition: .3s ease-in-out;
  cursor: pointer;
  border-radius: 9px;

  &:hover {
    background-color: rgba(0,0,0,.1);
  }
`