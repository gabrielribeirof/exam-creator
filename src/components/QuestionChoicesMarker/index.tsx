import { type RefObject, useEffect, useRef, useState } from 'react'
import { Minus, Plus } from 'phosphor-react'
import produce from 'immer'

import { useField } from '@unform/core'

import { Label } from '../Label'
import { Container, Item, ItemCircle, ItemText } from '../QuestionChoices'
import { Button } from '../Button'

import { ChoicesInputControlBar, ChoicesInputControlBarButtons } from './styles'

interface QuestionChoicesMarkerProps {
  name: string
}

interface DefaultChoicesValue {
  id: string
  selected: boolean
}

export function QuestionChoicesMarker({ name }: QuestionChoicesMarkerProps) {
  const containerRef = useRef<HTMLUListElement>(null)
  const { fieldName, registerField, defaultValue, error } = useField(name)

  const [choices, setChoices] = useState<DefaultChoicesValue[]>(defaultValue)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: containerRef,
      getValue: (ref: RefObject<HTMLUListElement>) => {
        if (!ref.current) return []

        return Array.from(ref.current.getElementsByTagName('li')).map((value) => ({
          id: value.getElementsByTagName('div')[0].id,
          text: value.getElementsByTagName('div')[1].innerText,
          selected: value.dataset.state === undefined ? false : value.dataset.state === 'true'
        }))
      },
      clearValue: () => {
        setChoices(defaultValue)
      },
      setValue: (_, value) => {
        setChoices(value)
      }
    })
  }, [fieldName, choices, containerRef])

  function addChoice() {
    if (choices.length === 5) {
      return alert('The question must have a maximum of 5 answer choices.')
    }

    setChoices([
      ...choices,
      {
        id: `${choices.length}-choice`,
        selected: false
      }
    ])
  }

  function removeChoice() {
    if (choices.length === 2) {
      return alert('The question must have at least 2 answer choices')
    }

    setChoices(choices.slice(0, choices.length - 1))
  }

  function setChoiceSelected(id: string) {
    setChoices(produce(choices, draft => {
      const newSelectedIndex = draft.findIndex(choice => choice.id === id)
      const oldSelectedIndex = draft.findIndex(choice => choice.selected)

      if (newSelectedIndex !== -1 || oldSelectedIndex !== -1) {
        draft[newSelectedIndex].selected = true
        draft[oldSelectedIndex].selected = false
      }
    }))
  }

  return (
    <>
      <ChoicesInputControlBar>
        <Label
          text='Create answer choices and mark the corret one'
          error={error}
          mandatory
        />

        <ChoicesInputControlBarButtons>
          <Button
            icon={Plus}
            color='blue'
            variant='outlined'
            onClick={addChoice}
            type='button'
          >
            Add choice
          </Button>

          <Button
            icon={Minus}
            color='blue'
            variant='outlined'
            onClick={removeChoice}
            type='button'
          >
            Remove choice
          </Button>
        </ChoicesInputControlBarButtons>
      </ChoicesInputControlBar>

      <Container ref={containerRef}>
        {choices.map((choice, index) => (
          <Item id={choice.id} key={choice.id} selected={choice.selected} data-state={choice.selected}>
            <ItemCircle onClick={() => setChoiceSelected(choice.id)}>
              {String.fromCharCode(index + 65)}
            </ItemCircle>

            <ItemText contentEditable placeholder='Write the choice text...'></ItemText>
          </Item>
        ))}
      </Container>
    </>
  )
}
