import { useRef, useState } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { CaretDown, CaretUp, DotsSix, Pencil, Trash } from 'phosphor-react'

import { useList } from '../../hooks/useQuestionList'

import {
  Container,
  Content,
  Title,
  Body,
  ActionBar,
  ActionButton
} from './styles'

interface QuestionCardProps {
  id: string
  index: number
  body?: string
  onEditRequest: (id: string) => void
  onDeleteRequest: (id: string) => void
}

export function QuestionCard({
  id,
  index,
  onEditRequest,
  onDeleteRequest
}: QuestionCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  const [extended, setExtended] = useState(false)
  const { move } = useList()

  const [{ isDragging }, drag] = useDrag({
    type: 'CARD',
    item: { id, index },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  })

  const [, drop] = useDrop<QuestionCardProps>({
    accept: 'CARD',
    hover: (item, monitor) => {
      const draggedIndex = item.index
      const targetIndex = index

      if (draggedIndex === targetIndex) return

      const targetSize = ref.current?.getBoundingClientRect()
      if (!targetSize) return

      const targetCriticalPoint = (targetSize?.bottom - targetSize?.top) / 2

      const draggedOffset = monitor.getClientOffset()
      if (!draggedOffset) return

      const draggedTop = draggedOffset.y - targetSize.top

      if (draggedIndex < targetIndex && draggedTop < targetCriticalPoint) return
      if (draggedIndex > targetIndex && draggedTop > targetCriticalPoint) return

      move(draggedIndex, targetIndex)

      item.index = targetIndex
    }
  })

  drag(drop(ref))

  return (
    <Container ref={ref} isDragging={isDragging}>
      <DotsSix className="drag-indicator" weight="bold" />

      <Content extended={extended}>
        <Title>Question {index + 1}</Title>
        <Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus
          eu eros sit amet cursus. Nullam aliquet ex sed lorem congue, sed
          suscipit lectus semper. Quisque semper ullamcorper tortor, sed euismod
          tellus feugiat in. Sed pretium ante nec leo viverra, sed varius orci
          laoreet. Praesent dui massa, feugiat in euismod id, suscipit sit amet
          leo. Aenean at sem nec nisi sollicitudin cursus. Pellentesque habitant
          morbi tristique senectus et netus et malesuada fames ac turpis
          egestas. Nunc tortor massa, faucibus et purus non, tempor blandit
          risus. Fusce et leo porta, tristique dolor vulputate, tincidunt justo.
          Ut ac vestibulum orci. Sed rhoncus, tellus at suscipit accumsan, quam
          mauris aliquam lectus, vel pellentesque odio nibh et mauris.
          Pellentesque consequat, magna non eleifend placerat, purus erat
          fringilla justo, sit amet laoreet libero est ut justo. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Proin dapibus eu eros sit
          amet cursus. Nullam aliquet ex sed lorem congue, sed suscipit lectus
          semper. Quisque semper ullamcorper tortor, sed euismod tellus feugiat
          in. Sed pretium ante nec leo viverra, sed varius orci laoreet.
          Praesent dui massa, feugiat in euismod id, suscipit sit amet leo.
          Aenean at sem nec nisi sollicitudin cursus. Pellentesque habitant
          morbi tristique senectus et netus et malesuada fames ac turpis
          egestas. Nunc tortor massa, faucibus et purus non, tempor blandit
          risus. Fusce et leo porta, tristique dolor vulputate, tincidunt justo.
          Ut ac vestibulum orci. Sed rhoncus, tellus at suscipit accumsan, quam
          mauris aliquam lectus, vel pellentesque odio nibh et mauris.
          Pellentesque consequat, magna non eleifend placerat, purus erat
          fringilla justo, sit amet laoreet libero est ut justo.
        </Body>
      </Content>

      <ActionBar>
        <ActionButton red type="button" onClick={() => onDeleteRequest(id)}>
          <Trash weight="fill" />
          Delete
        </ActionButton>

        <ActionButton type="button" onClick={() => onEditRequest(id)}>
          <Pencil weight="fill" />
          Edit
        </ActionButton>

        <ActionButton onClick={() => setExtended(!extended)} type="button">
          {extended ? (
            <CaretUp size={14} weight="fill" />
          ) : (
            <CaretDown size={14} weight="fill" />
          )}
          {extended ? 'Shrink the question' : 'Expand the question'}
        </ActionButton>
      </ActionBar>
    </Container>
  )
}
