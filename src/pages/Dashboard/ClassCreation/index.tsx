import { useRef, useState } from 'react'
import { Plus, Trash, UsersFour } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  type ClassFormSchema,
  classFormSchema
} from '../../../lib/schemas/classFormSchema'

import { DashboardBase } from '../../../components/DashboardBase'
import { StepControlBar } from '../../../components/StepControlBar'
import { FormContent } from '../../../components/Form'

import { Button } from '../../../components/Button'
import { Input } from '../../../components/Input'

import {
  WithButtonInputContainer,
  InputButton,
  MemberList,
  MemberListItem,
  MemberListItemCircle,
  MemberListItemInfo,
  MemberListItemActions
} from './styles'

export function ClassCreation() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ClassFormSchema>({
    resolver: zodResolver(classFormSchema)
  })

  const emailInputRef = useRef<HTMLInputElement>(null)

  const [loading] = useState(false)
  const [members, setMembers] = useState<
    Array<{ id: string; name: string; email: string }>
  >([])

  function handleMemberAdd(email: string) {
    if (!email) return

    setMembers([
      ...members,
      { id: (Math.random() * 1000000).toString(), name: 'Gabriel', email }
    ])

    if (emailInputRef.current) {
      emailInputRef.current.value = ''
    }
  }

  function handleMemberRemove(email: string) {
    if (!email) return

    setMembers(members.filter(member => member.email !== email))
  }

  return (
    <DashboardBase
      header={{
        icon: UsersFour,
        title: 'Class Creation',
        color: 'blue'
      }}
      content={{ smallerWidth: true }}
    >
      <form onSubmit={handleSubmit(data => console.log(data))}>
        <StepControlBar
          title="Settings"
          description="* Mandatory fields"
          buttons={
            <Button type="submit" color="blue" isLoading={loading}>
              Create
            </Button>
          }
        />

        <FormContent>
          <Input
            label="Class Title"
            error={errors.title?.message}
            mandatory
            {...register('title')}
          />

          <WithButtonInputContainer>
            <Input
              ref={emailInputRef}
              name="email"
              label="Add people by their e-mail"
              type="email"
              error={errors.users?.message}
              mandatory
            />

            <InputButton
              type="button"
              onClick={() =>
                handleMemberAdd(emailInputRef.current?.value ?? '')
              }
            >
              <Plus size={18} weight="bold" />
            </InputButton>
          </WithButtonInputContainer>

          <MemberList>
            {members.map(member => (
              <MemberListItem key={member.id}>
                <MemberListItemCircle>
                  {member.name[0].toUpperCase()}
                </MemberListItemCircle>

                <MemberListItemInfo>
                  <strong>{member.name}</strong>({member.email})
                </MemberListItemInfo>

                <MemberListItemActions
                  onClick={() => handleMemberRemove(member.email)}
                >
                  <Trash weight="fill" color="#DE4534" cursor="pointer" />
                </MemberListItemActions>
              </MemberListItem>
            ))}
          </MemberList>
        </FormContent>
      </form>
    </DashboardBase>
  )
}
