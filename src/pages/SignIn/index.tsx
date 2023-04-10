import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { useAuthentication } from '../../hooks/useAuthentication'

import previewImage from '../../assets/preview-image.svg'

import { Logo } from '../../components/Logo'
import { Toast } from '../../components/Toast'
import { GoogleSignInButton } from './GoogleSignInButton'

import {
  Container,
  Tab,
  TabTitle,
  TabLoadingIndicator,
  Content,
  ContentLogo,
  ContentSeparator
} from './styles'

export function SignIn() {
  const [transit, setTransit] = useState(false)
  const [signInError, setSignInError] = useState(false)

  const navigate = useNavigate()

  const tabContentRef = useRef<HTMLDivElement>(null)
  const loadingIndicatorRef = useRef<HTMLDivElement>(null)

  const { signed, firstChecked, signInWithGoogle } = useAuthentication()

  useEffect(() => {
    if (!firstChecked || !signed) return

    setTransit(true)
    setTimeout(() => navigate('/dashboard/exams'), 3000)
  }, [firstChecked])

  async function handleSignIn() {
    if (!firstChecked || signed) return

    try {
      await signInWithGoogle()

      signInError && setSignInError(false)

      setTransit(true)
      setTimeout(() => navigate('/dashboard/exams'), 3000)
    } catch (error) {
      setSignInError(true)
    }
  }

  return (
    <Container>
      <Tab className={transit ? 'transit' : ''}>
        <TransitionGroup>
          {!transit && (
            <CSSTransition
              key="original"
              nodeRef={tabContentRef}
              timeout={400}
              classNames="fade"
            >
              <div ref={tabContentRef}>
                <Logo />

                <TabTitle>
                  Digital
                  <br />
                  platform
                  <br />
                  for creating
                  <br />
                  <span className="last-word">exams</span>
                </TabTitle>

                <img className="preview-image" src={previewImage} />
              </div>
            </CSSTransition>
          )}

          {transit && (
            <CSSTransition
              key="loading"
              nodeRef={loadingIndicatorRef}
              timeout={400}
              classNames="fade"
            >
              <TabLoadingIndicator ref={loadingIndicatorRef}>
                <Logo />
              </TabLoadingIndicator>
            </CSSTransition>
          )}
        </TransitionGroup>
      </Tab>

      <Content className={transit ? 'transit' : ''}>
        <ContentLogo>
          <Logo />
          <span>ExamCreator</span>
        </ContentLogo>

        <ContentSeparator>Welcome! Log in to the dashboard.</ContentSeparator>

        <GoogleSignInButton onClick={handleSignIn} />
      </Content>

      <Toast
        title="Error trying signing up"
        description="Please, try again"
        open={signInError}
        setOpen={setSignInError}
      />
    </Container>
  )
}
