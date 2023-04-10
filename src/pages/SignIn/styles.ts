import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: flex-end;
`

export const Tab = styled.div`
  width: 45%;
  height: 100%;
  padding: 40px;
  border-radius: 0 64px 64px 0;
  background: linear-gradient(316deg, #1e2ad2 6.08%, #ffa6b7 85.93%);

  position: absolute;
  left: 0;
  z-index: 2000;
  overflow: hidden;

  img.preview-image {
    position: absolute;
    left: -500px;
  }

  &.transit {
    width: 100vw;
    border-radius: 0;
    transition: width 400ms, border-radius 400ms;
  }

  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    opacity: 1;
    transition: opacity 400ms;
  }

  .fade-exit {
    opacity: 1;
    transform: translateX(0%);
  }

  .fade-exit-active {
    opacity: 0;
    transform: translateX(-100%);
    transition: opacity 400ms, transform 400ms;
  }

  @media (max-width: 960px) {
    transform: translateX(-100%);

    &.transit {
      transform: translateX(0);
      transition: transform 400ms;
    }
  }
`

export const TabTitle = styled.h1`
  font-family: 'DM Sans';
  font-weight: bold;
  font-size: 40px;
  color: #ffffff;

  > .last-word {
    color: #202020;
  }
`

const jump = keyframes`
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: none;
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
`

export const TabLoadingIndicator = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  > * {
    animation: ${jump} 1s infinite;
  }
`

const fadeIn = keyframes`
  from {
    opacity: unset;
  }
  to {
    opacity: 0;
  }
`

export const Content = styled.div`
  width: 55%;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &.transit {
    animation: ${fadeIn} 400ms linear forwards;
  }

  @media (max-width: 960px) {
    width: 100%;
  }
`

export const ContentLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    padding-left: 10px;
    font-family: 'DM Sans';
    font-weight: bold;
    font-size: 32px;
    color: #202020;
  }

  @media (max-width: 960px) {
    flex-direction: column;
  }
`

export const ContentSeparator = styled.div`
  margin: 24px 0 54px;
  position: relative;

  font-family: 'DM Sans';
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  color: #c0c0c0;

  &::before,
  &:after {
    @media (max-width: 960px) {
      display: none;
    }
  }

  &:before {
    content: '';
    width: 50px;
    border-bottom: solid 1px #c0c0c0;
    position: absolute;
    left: calc(-50px - 10px);
    top: 50%;
  }

  &:after {
    content: '';
    width: 50px;
    border-bottom: solid 1px #c0c0c0;
    position: absolute;
    left: calc(100% + 10px);
    top: 50%;
  }
`
