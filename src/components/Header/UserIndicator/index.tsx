import { useState } from 'react'
import { CaretDown, CaretUp, SignOut } from 'phosphor-react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import { useAuthentication } from '../../../hooks/useAuthentication'

import {
  Trigger,
  TriggerUserInfo,
  TriggerUserAvatar,
  TriggerIndicator,
  Dropdown,
  DropdownItem,
  DropdownItemIcon
} from './styles'

export function UserIndicator() {
  const [open, setOpen] = useState(false)

  const { user, signOut } = useAuthentication()

  return (
    <DropdownMenu.Root open={open} onOpenChange={setOpen}>
      <Trigger>
        <TriggerUserInfo>
          <span className="name">Hi, {user?.name}</span>
          <span className="email" title={user?.email ?? ''}>{user?.email}</span>
        </TriggerUserInfo>

        <TriggerUserAvatar>G</TriggerUserAvatar>

        <TriggerIndicator>
          {open ? <CaretUp size={16} weight="bold" /> : <CaretDown size={16} weight="bold" />}
        </TriggerIndicator>
      </Trigger>

      <DropdownMenu.Portal>
        <Dropdown>
          <DropdownItem onClick={signOut}>
            <DropdownItemIcon>
              <SignOut weight='bold' />
            </DropdownItemIcon>

            Sign out
          </DropdownItem>
        </Dropdown>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
