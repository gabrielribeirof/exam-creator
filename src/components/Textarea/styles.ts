import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 5px;
    font-weight: bold;

    .mandatory-indicator {
      margin-left: 5px;
      color: #d33131;
    }
  }

  textarea {
    height: 50px;
    padding: 14px 12px;
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
