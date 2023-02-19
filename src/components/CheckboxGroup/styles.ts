import styled from 'styled-components'
import { Root, Indicator } from '@radix-ui/react-checkbox'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > div:not(:last-child) {
    margin-bottom: 10px;
  }
`

export const Checkbox = styled.div`
  display: flex;
  align-items: center;

  label {
    margin-left: 10px;
  }
`

export const CheckboxBox = styled(Root)`
  width: 25px;
  height: 25px;
  padding: 0;
  border: 1px solid #C0C0C0;
  border-radius: 6px;

  font-size: 16px;
  background-color: #E7E7E7;
  outline: none;
  cursor: pointer;
  transition: border-color 200ms;

  &:hover, &:focus {
    border-color: #888888;
  }

  &[data-state='checked'] {
    background-color: #003BAE;
  }
`

export const CheckboxIndicator = styled(Indicator)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #E7E7E7;
`
