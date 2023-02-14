import styled from 'styled-components'

export const Container = styled.button`
  min-width: 260px;
  height: 40px;
  border: 1px solid #A8A8B3;
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
    background-color: #F0F0F0;
  }
`
