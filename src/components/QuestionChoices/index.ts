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
  border-top: 1px solid #c0c0c0;

  display: flex;
  align-items: center;

  transition: background-color 200ms;
  list-style: none;
  cursor: pointer;

  &:hover {
    background-color: #ececec;
  }

  &:last-child {
    border-bottom: 1px solid #c0c0c0;
  }

  ${props =>
    props.selected &&
    css`
      background-color: #dee9ff;

      &:hover {
        background-color: #dee9ff;
      }
    `}
`

export const ItemCircle = styled.div`
  width: 40px;
  min-width: 40px;
  height: 40px;
  margin-right: 20px;
  border: 1px solid #c0c0c0;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: bold;
  background-color: #fff;
`

export const ItemText = styled.div`
  outline: none;

  &:empty::before {
    content: attr(placeholder);
    color: #c0c0c0;
  }

  &:empty:focus::before {
    content: '';
  }
`
