import { IconContext, type Icon } from 'phosphor-react'

import {
  Container,
  CardContent,
  CardContentTitle,
  CardContentItem,
  CardFooter,
  CardFooterLeft,
  CardFooterRight
} from './styles'

interface CardProps {
  title: string
  textColor?: string
  backgroundColor?: string
  items: Array<{ icon: Icon, name: string }>
  footer: {
    left?: { text: string, icon: Icon }
    right: { text: string, icon: Icon }
  }
}

export function Card({ title, textColor, backgroundColor, items, footer }: CardProps) {
  return (
    <Container backgroundColor={backgroundColor} textColor={textColor}>
      <CardContent>
        <CardContentTitle>{title}</CardContentTitle>

        {items.map(item => (
          <CardContentItem key={item.name}>
            <IconContext.Provider value={{ size: 16, weight: 'bold' }}>
              <item.icon />
            </IconContext.Provider>
            {item.name}
          </CardContentItem>
        ))}
      </CardContent>

      <CardFooter>
        {footer.left && (
          <CardFooterLeft>
            <IconContext.Provider value={{ size: 16, weight: 'bold' }}>
              <footer.left.icon />
            </IconContext.Provider>
            {footer.left.text}
          </CardFooterLeft>
        )}

        <CardFooterRight>
          {footer.right.text}
          <IconContext.Provider value={{ size: 16, weight: 'bold' }}>
            <footer.right.icon />
          </IconContext.Provider>
        </CardFooterRight>
      </CardFooter>
    </Container>
  )
}
