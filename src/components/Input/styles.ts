import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    font-weight: bold;

    > svg {
      margin-right: 5px;
    }

    .mandatory-indicator {
      margin-left: 5px;
      color: #D33131;
    }
  }

  input {
    height: 50px;
    padding: 0 12px;
    border: 1px solid #C0C0C0;
    border-radius: 6px;

    background-color: #E7E7E7;
    font-family: 'Inter';
    font-size: 16px;
    outline: none;
    transition: border-color 200ms;

    &:hover, &:focus {
      border-color: #888888;
    }
  }
`
