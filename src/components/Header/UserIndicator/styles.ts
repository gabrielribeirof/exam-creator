import styled from 'styled-components'
import {
  DropdownMenuTrigger,
  Content,
  Item
} from '@radix-ui/react-dropdown-menu'

export const USER_INDICATOR_WIDTH_IN_PX = 280

export const Trigger = styled(DropdownMenuTrigger)`
  min-width: ${USER_INDICATOR_WIDTH_IN_PX}px;
  max-width: ${USER_INDICATOR_WIDTH_IN_PX}px;
  padding: 6px 14px;
  border: none;
  border-radius: 16px 16px 0 0;

  display: flex;
  align-items: center;

  font-family: 'Inter';
  background-color: transparent;
  outline: none;
  cursor: pointer;

  &[data-state='open'] {
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  }
`

export const TriggerUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
  font-size: 14px;

  .name,
  .email {
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: end;
  }

  .name {
    font-weight: bold;
  }
`

export const TriggerUserAvatar = styled.div`
  width: 50px;
  height: 50px;
  margin: 0 10px;
  border-radius: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'DM Sans';
  font-size: 28px;
  font-weight: bold;
  color: #fff;

  background-color: #ff6b00;
`

export const TriggerIndicator = styled.div``

export const Dropdown = styled(Content)`
  width: ${USER_INDICATOR_WIDTH_IN_PX}px;
  border-radius: 0 0 16px 16px;

  background-color: #eeeeee;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1);
  font-size: 14px;
`

export const DropdownItem = styled(Item)`
  height: 30px;
  padding: 20px 16px;
  display: flex;
  align-items: center;
  outline: none;
  cursor: pointer;
  font-weight: 500;
`

export const DropdownItemIcon = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
`
