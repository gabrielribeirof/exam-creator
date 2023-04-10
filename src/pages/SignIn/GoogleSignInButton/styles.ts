import styled from 'styled-components'

export const Container = styled.button`
  min-width: 260px;
  height: 40px;
  border: 1px solid #a8a8b3;
  border-radius: 16px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;

  font-family: 'Inter';
  font-size: 16px;
  background: none;
  cursor: pointer;
  transition: background-color 200ms;

  &:hover {
    background-color: #f0f0f0;
  }
`
