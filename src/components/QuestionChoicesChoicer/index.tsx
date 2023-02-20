import { Container, Item, ItemCircle, ItemText } from '../QuestionChoices'

interface QuestionChoicesChoicerProps {
  choices: Array<{ id: string, text: string, selected: boolean }>
  onChoiceSelect: (id: string) => void
}

export function QuestionChoicesChoicer({ choices, onChoiceSelect }: QuestionChoicesChoicerProps) {
  return (
    <Container>
      {choices.map((choice, index) => (
        <Item
          id={choice.id}
          key={choice.id}
          selected={choice.selected}
          onClick={() => onChoiceSelect(choice.id)}
        >
          <ItemCircle>
            {String.fromCharCode(index + 65)}
          </ItemCircle>

          <ItemText>{choice.text}</ItemText>
        </Item>
      ))}
    </Container>
  )
}
