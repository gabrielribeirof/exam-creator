import { Container, Item, ItemCircle, ItemText } from '../QuestionChoices'

interface QuestionChoicesChoicerProps {
  choices: Array<{ id: string, text: string, selected: boolean }>
  setChoiceSelected: (id: string) => void
}

export function QuestionChoicesChoicer({ choices, setChoiceSelected }: QuestionChoicesChoicerProps) {
  return (
    <Container>
      {choices.map((choice, index) => (
        <Item id={choice.id} key={choice.id} selected={choice.selected} data-state={choice.selected}>
          <ItemCircle onClick={() => setChoiceSelected(choice.id)}>
            {String.fromCharCode(index + 65)}
          </ItemCircle>

          <ItemText contentEditable placeholder='Write the choice text...'></ItemText>
        </Item>
      ))}
    </Container>
  )
}
