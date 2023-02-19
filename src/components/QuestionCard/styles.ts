import styled, { css } from 'styled-components'

interface ContainerProps {
  isDragging: boolean
}

export const Container = styled.div<ContainerProps>`
  border: 1px solid #C0C0C0;
  border-radius: 16px;
  background-color: #FFF;
  position: relative;
  cursor: grab;

  &:hover, &focus {
    transition: border-color 200ms;
    border-color: #888888;

    > div:last-child {
      transition: border-color 200ms;
      border-color: #888888;
    }
  }

  .drag-indicator {
    position: absolute;
    left: 50%;
  }

  ${props => props.isDragging && css`
    border: 1px dashed rgba(0, 0, 0, 0.5);
    background: transparent;
    cursor: grabbing;

    > * {
      opacity: 0;
    }
  `}
`

interface ContentProps {
  extended: boolean
}

export const Content = styled.div<ContentProps>`
  padding: 18px 20px;
  overflow: hidden;

  ${props => !props.extended && css`
    max-height: 220px;
  `}
`

export const Title = styled.div`
  margin-bottom: 14px;
  font-size: 20px;
  font-weight: bold;
`

export const Body = styled.div`
  color: #444444;
`

export const ActionBar = styled.div`
  min-height: 50px;
  padding: 0 20px;
  border-top: 1px solid #C0C0C0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  gap: 5px;
`

interface ActionButtonProps {
  red?: boolean
}

export const ActionButton = styled.button<ActionButtonProps>`
  padding: none;
  border: none;

  display: flex;
  align-items: center;
  gap: 5px;

  word-break: keep-all;
  background: none;
  color: ${props => props.red ? '#DE4534' : '#003BAE'};
  transition: color 200ms;
  cursor: pointer;

  &:hover {
    color: ${props => props.red ? '#9F1101' : '#01308B'};
  }
`
