import { useState } from 'react'
import { FloppyDiskBack, Plus, Trash, UsersFour } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  classFormSchema,
  type ClassFormSchema
} from '../../../lib/schemas/classFormSchema'

import { FormContent } from '../../../components/Form'

import { DashboardBase } from '../../../components/DashboardBase'
import { StepControlBar } from '../../../components/StepControlBar'
import { Button } from '../../../components/Button'
import { Input } from '../../../components/Input'

import {
  InputButton,
  MemberList,
  MemberListItem,
  MemberListItemActions,
  MemberListItemCircle,
  MemberListItemInfo,
  WithButtonInputContainer
} from '../ClassCreation/styles'

export function ClassEdition() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ClassFormSchema>({
    resolver: zodResolver(classFormSchema)
  })

  const [loading] = useState(false)

  return (
    <DashboardBase
      header={{
        icon: UsersFour,
        title: 'Class Edition',
        color: 'blue'
      }}
      content={{ smallerWidth: true }}
    >
      <form onSubmit={handleSubmit(data => console.log(data))}>
        <StepControlBar
          title="Settings"
          description="* Mandatory fields"
          buttons={
            <>
              <Button type="submit" color="red" variant="outlined">
                Delete class
              </Button>

              <Button
                icon={FloppyDiskBack}
                type="submit"
                color="blue"
                isLoading={loading}
              >
                Save
              </Button>
            </>
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
              name="email"
              label="Add people by their e-mail"
              type="email"
              error={errors.users?.message}
              mandatory
            />

            <InputButton type="button">
              <Plus size={18} weight="bold" />
            </InputButton>
          </WithButtonInputContainer>

          <MemberList>
            <MemberListItem>
              <MemberListItemCircle>G</MemberListItemCircle>

              <MemberListItemInfo>
                <strong>Gabriel Ribeiro</strong>
                (ogabrielribeirof@gmail.com)
              </MemberListItemInfo>

              <MemberListItemActions>
                <Trash weight="fill" color="#DE4534" cursor="pointer" />
              </MemberListItemActions>
            </MemberListItem>
          </MemberList>
        </FormContent>
      </form>
    </DashboardBase>
  )
}
