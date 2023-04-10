import styled, { css } from 'styled-components'

export const Container = styled.div``

export const Label = styled.label`
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  font-weight: bold;

  > svg {
    margin-right: 5px;
  }

  .mandatory-indicator {
    margin-left: 5px;
    color: #d33131;
  }
`

export const Editor = styled.div`
  border: 1px solid #c0c0c0;
  border-radius: 6px;
  overflow: hidden;

  .editor-content {
    min-height: 140px;
    padding: 0 10px;
    border-radius: 6px;
    font-family: 'Inter';
    outline: none;
    overflow: auto;

    p.is-editor-empty:first-child::before {
      color: #c0c0c0;
      content: attr(data-placeholder);
      float: left;
      height: 0;
      pointer-events: none;
    }
  }
`

export const Bar = styled.div`
  padding: 5px;
  border-bottom: 1px solid #c0c0c0;
  display: flex;
  gap: 5px;
`

interface BarItemProps {
  isActive?: boolean
  isDisabled?: boolean
}

export const BarItem = styled.button<BarItemProps>`
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 6px;
  border: 1px solid #c0c0c0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  color: #6f6e77;
  cursor: pointer;

  ${props =>
    !props.isActive &&
    css`
      &:hover {
        background-color: #e9e9e9;
      }
    `}

  ${props =>
    props.isActive &&
    css`
      background-color: #c0c0c0;
      color: #fff;
    `}

  ${props =>
    props.isDisabled &&
    css`
      background-color: #a0a0a0;
      color: #fff;
    `}
`
