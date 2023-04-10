import styled from 'styled-components'

export const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;

  > label {
    margin-bottom: 5px;
    font-weight: bold;

    .mandatory-indicator {
      margin-left: 5px;
      color: #d33131;
    }
  }

  > div:not(:last-child) {
    margin-bottom: 10px;
  }
`

export const SchedulingGroup = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;

  > label {
    margin-bottom: 5px;
    font-weight: bold;

    .mandatory-indicator {
      margin-left: 5px;
      color: #d33131;
    }
  }

  > div > label {
    font-weight: 400;
  }

  > div:not(:last-child) {
    margin-bottom: 10px;
  }
`
