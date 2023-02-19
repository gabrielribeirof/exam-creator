import { Plus, Trash, UsersFour } from 'phosphor-react'

import { DashboardBase } from '../../../components/DashboardBase'
import { Button } from '../../../components/Button'
import { Input } from '../../../components/Input'

import {
  Content,
  WithButtonInputContainer,
  InputButton,
  MemberList,
  MemberListItem,
  MemberListItemActions,
  MemberListItemCircle,
  MemberListItemInfo
} from './styles'
import { StepControlBar } from '../../../components/StepControlBar'

export function ClassCreation() {
  return (
    <DashboardBase
      header={{
        icon: UsersFour,
        title: 'Class Creation',
        color: 'blue'
      }}
      content={{ smallerWidth: true }}
    >
      <Content>
        <StepControlBar
          title='Settings'
          description='* Mandatory fields'
          buttons={<Button type='submit' color='blue'>Create</Button>}
        />

        <Input name='title' label='Class Title' mandatory />

        <WithButtonInputContainer>
          <Input name='email' label='Add people by their e-mail' type='email' mandatory />

          <InputButton>
            <Plus size={18} weight='bold' />
          </InputButton>
        </WithButtonInputContainer>

        <MemberList>
          <MemberListItem>
            <MemberListItemCircle>
              G
            </MemberListItemCircle>

            <MemberListItemInfo>
              <strong>Gabriel Ribeiro</strong>
              (ogabrielribeirof@gmail.com)
            </MemberListItemInfo>

            <MemberListItemActions>
              <Trash weight='fill' color='#DE4534' cursor='pointer' />
            </MemberListItemActions>
          </MemberListItem>
        </MemberList>
      </Content>
    </DashboardBase>
  )
}
