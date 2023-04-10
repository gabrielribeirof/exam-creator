import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  label {
    > svg {
      margin-right: 5px;
    }
  }

  input {
    height: 50px;
    padding: 0 12px;
    border: 1px solid #c0c0c0;
    border-radius: 6px;

    background-color: #e7e7e7;
    font-family: 'Inter';
    outline: none;
    transition: border-color 200ms;

    &:hover,
    &:focus {
      border-color: #888888;
    }
  }
`
