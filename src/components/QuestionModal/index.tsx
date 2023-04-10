import React, { type ReactNode } from 'react'
import { X } from 'phosphor-react'

import * as Dialog from '@radix-ui/react-dialog'

import { Form } from '@unform/web'
import { type SubmitHandler } from '@unform/core'

import { Button } from '../Button'
import { TextEditor } from '../TextEditor'

import {
  Content,
  Header,
  HeaderCloseButton,
  HeaderTitle,
  HeaderActions,
  Body
} from './styles'

import { QuestionChoicesMarker } from '../QuestionChoicesMarker'

interface ModalChoices {
  id: string
  text: string
  selected: boolean
}

interface FormData {
  statement: string
  choices: ModalChoices[]
}

type QuestionModalProps = React.ComponentProps<typeof Dialog.Root> & {
  trigger?: ReactNode
  type?: 'creation' | 'edition'
  id?: string
}

export function QuestionModal({ trigger, type, ...props }: QuestionModalProps) {
  function handleSubmit(data: SubmitHandler<FormData>) {
    console.log(data)
  }

  return (
    <Dialog.Root {...props}>
      {trigger && <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>}

      <Dialog.Portal>
        <Dialog.Overlay />

        <Content>
          <Form
            onSubmit={handleSubmit}
            initialData={{
              choices: [{ id: '123', selected: true }],
              statement: 'KKKK'
            }}
          >
            <Header>
              <HeaderCloseButton>
                <X size={24} weight="bold" />
              </HeaderCloseButton>

              <HeaderTitle>
                Question {type === 'edition' ? 'Edition' : 'Creation'}
              </HeaderTitle>

              <HeaderActions>
                <Button color="blue" type="submit">
                  Save question
                </Button>
              </HeaderActions>
            </Header>

            <Body>
              <TextEditor name="statement" label="Statement" mandatory />

              <QuestionChoicesMarker name="choices" />
            </Body>
          </Form>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
