import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

import { LOGO_WIDTH_IN_PX } from '../Logo/styles'
import { USER_INDICATOR_WIDTH_IN_PX } from './UserIndicator/styles'

const HEADER_HEIGHT_IN_PX = 80
const HEADER_CONTENT_HORIZONTAL_SIDE_PADDING_IN_PX = 20

export const Container = styled.header`
  height: ${HEADER_HEIGHT_IN_PX}px;
  background-color: #eeeeee;
  display: flex;
`

export const Content = styled.div`
  width: 100%;
  padding: 0 ${HEADER_CONTENT_HORIZONTAL_SIDE_PADDING_IN_PX}px;
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  align-items: center;

  & > div:first-of-type {
    margin-right: 20px;
  }

  @media (max-width: 960px) {
    justify-content: space-between;
  }

  @media (max-width: ${USER_INDICATOR_WIDTH_IN_PX +
    LOGO_WIDTH_IN_PX +
    HEADER_CONTENT_HORIZONTAL_SIDE_PADDING_IN_PX * 2}px) {
    justify-content: flex-end;

    & > div:first-of-type {
      display: none;
    }
  }
`

export const Nav = styled.nav`
  display: flex;
  flex: 1;

  @media (max-width: 960px) {
    display: none;
  }
`

interface NavItemProps {
  selected: boolean
}

export const NavItem = styled(Link)<NavItemProps>`
  height: ${HEADER_HEIGHT_IN_PX}px;
  padding: 0 20px;
  position: relative;

  display: flex;
  align-items: center;

  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  color: #202020;
  cursor: pointer;

  &:hover,
  &:focus {
    &:after {
      opacity: 1;
    }
  }

  &:after {
    content: '';
    position: absolute;
    border-top: 6px solid #003bae;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    transition: opacity 200ms;

    ${props =>
      props.selected &&
      css`
        opacity: 1;
      `}
  }
`
