import styled from 'styled-components'

export const Content = styled.div`
  > *:not(:last-child) {
    margin-bottom: 10px;
  }
`

export const WithButtonInputContainer = styled.div`
  display: flex;
  align-items: flex-end;

  div:first-child {
    width: 100%;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    row-gap: 10px;

    button {
      width: 100%;
    }
  }
`

export const InputButton = styled.button`
  width: 50px;
  min-width: 50px;
  height: 50px;
  margin-left: 10px;
  border: 1px solid #01308b;
  border-radius: 6px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #003bae;
  color: #fff;
  cursor: pointer;
  transition: background-color 200ms;

  &:hover {
    background-color: #01308b;
  }
`

export const MemberList = styled.ul`
  padding: 0;
  list-style: none;
`

export const MemberListItem = styled.li`
  padding: 10px 20px;
  border-top: 1px solid #c0c0c0;

  display: flex;
  align-items: center;

  &:last-child {
    border-bottom: 1px solid #c0c0c0;
  }
`

export const MemberListItemCircle = styled.div`
  width: 50px;
  min-width: 50px;
  height: 50px;
  margin-right: 20px;
  border: 1px solid #01308b;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #003bae;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`

export const MemberListItemInfo = styled.div`
  word-break: break-word;
  display: flex;
  flex: 1;

  strong {
    margin-right: 10px;
  }

  @media (max-width: 960px) {
    flex-direction: column;
  }
`

export const MemberListItemActions = styled.div`
  margin-left: 10px;
  display: flex;

  > *:not(:last-child) {
    margin-right: 5px;
  }
`
