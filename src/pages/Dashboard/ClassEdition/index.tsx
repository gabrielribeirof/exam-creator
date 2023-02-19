import { useState } from 'react'
import { FloppyDiskBack, Plus, Trash, UsersFour } from 'phosphor-react'

import { type SubmitHandler } from '@unform/core'
import { Form } from '@unform/web'

import { DashboardBase } from '../../../components/DashboardBase'
import { StepControlBar } from '../../../components/StepControlBar'
import { Button } from '../../../components/Button'
import { Input } from '../../../components/Input'

import {
  Content,
  InputButton,
  MemberList,
  MemberListItem,
  MemberListItemActions,
  MemberListItemCircle,
  MemberListItemInfo,
  WithButtonInputContainer
} from '../ClassCreation/styles'

interface Member {
  id: string
  name: string
  email: string
}

interface FormData {
  title: string
}

interface MemberFormData {
  email: string
}

export function ClassEdition() {
  const [members, setMembers] = useState<Member[]>([])

  const handleSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data)
  }

  const handleMemberSubmit: SubmitHandler<MemberFormData> = (data) => {
    console.log(data)
  }

  function handleMemberDelete(id: string) {
    console.log(id)
  }

  return (
    <DashboardBase
      header={{
        icon: UsersFour,
        title: 'Class Edition',
        color: 'blue'
      }}
      content={{ smallerWidth: true }}
    >
      <Content>
        <Form onSubmit={handleSubmit}>
          <StepControlBar
            title='Settings'
            description='* Mandatory fields'
            buttons={<>
              <Button
                type='button'
                color='red'
                icon={Trash}
                variant='outlined'
              >
                Delete class
              </Button>

              <Button
                type='submit'
                color='blue'
                icon={FloppyDiskBack}
              >
                Save
              </Button>
            </>}
          />

          <Input name='title' label='Class Title' mandatory />
        </Form>

        <Form onSubmit={handleMemberSubmit}>
          <WithButtonInputContainer>
            <Input
              name='email'
              label='Add people by their e-mail'
              type='email'
              mandatory
            />

            <InputButton type='submit'>
              <Plus size={18} weight='bold' />
            </InputButton>
          </WithButtonInputContainer>
        </Form>

        <MemberList>
          {members.map(member => (
            <MemberListItem key={member.id}>
              <MemberListItemCircle>
                {member.name.charAt(0).toUpperCase()}
              </MemberListItemCircle>

              <MemberListItemInfo>
                <strong>{member.name}</strong>
                ({member.email})
              </MemberListItemInfo>

              <MemberListItemActions>
                <Trash
                  weight='fill'
                  color='#DE4534'
                  cursor='pointer'
                  onClick={() => handleMemberDelete(member.id)}
                />
              </MemberListItemActions>
          </MemberListItem>
          ))}
        </MemberList>
      </Content>
    </DashboardBase>
  )
}
