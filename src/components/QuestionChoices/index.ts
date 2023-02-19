import styled, { css } from 'styled-components'

export const Container = styled.ul`
  margin-top: 0;
  padding: 0;
`

interface ItemProps {
  selected?: boolean
}

export const Item = styled.li<ItemProps>`
  padding: 10px 14px;
  border-top: 1px solid #C0C0C0;

  display: flex;
  align-items: center;

  transition: background-color 200ms;
  list-style: none;
  cursor: pointer;

  &:hover {
    background-color: #ECECEC;
  }

  &:last-child {
    border-bottom: 1px solid #C0C0C0;
  }

  ${props => props.selected && css`
    background-color: #DEE9FF;

    &:hover {
      background-color: #DEE9FF;
    }
  `}
`

export const ItemCircle = styled.div`
  width: 40px;
  min-width: 40px;
  height: 40px;
  margin-right: 20px;
  border: 1px solid #C0C0C0;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: bold;
  background-color: #FFF;
`

export const ItemText = styled.div`
  outline: none;

  &:empty::before {
    content: attr(placeholder);
    color: #C0C0C0;
  }

  &:empty:focus::before {
    content: '';
  }
`
