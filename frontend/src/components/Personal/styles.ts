import styled from 'styled-components'

export const PersonalWrapper = styled.article`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  width: 70%;
  min-width: 420px;
  height: 720px;
  overflow-y: scroll;
  padding: 21px;
  margin: 21px;
  border: 1px solid rgba(0,0,0,.1);
  border-radius: 12px;
  box-shadow: 0 0 19px 1px rgba(0,0,0,.04);
`

export const PersonalHeaderWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  heihgt: auto;

  & div {
    display: flex;
    flex-flow: column nowrap;
    margin: 12px;
  }
`

export const PersonalInformationWrapper = styled.ul`
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: column nowrap;

  & li {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border-top: 1px solid rgba(0,0,0,.3);
    border-bottom: 1px solid rgba(0,0,0,.3);
    padding: 21px;
    margin: 9px;

    & label {
      color: rgba(0,0,0, .4);
    }

    & p {
      color: var(--color-black);
    }
  }
`