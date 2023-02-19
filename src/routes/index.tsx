import { type ReactNode } from 'react'
import { createBrowserRouter, type RouteObject, RouterProvider, Navigate } from 'react-router-dom'

import { useAuthentication } from '../hooks/useAuthentication'

import { SignIn } from '../pages/SignIn'

import { Dashboard } from '../pages/Dashboard'
import { Exams } from '../pages/Dashboard/Exams'
import { ExamCreation } from '../pages/Dashboard/ExamCreation'
import { ExamEdition } from '../pages/Dashboard/ExamEdition'
import { Classes } from '../pages/Dashboard/Classes'
import { ClassCreation } from '../pages/Dashboard/ClassCreation'
import { ClassEdition } from '../pages/Dashboard/ClassEdition'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <SignIn />
  },
  {
    path: '/dashboard',
    element: <AuthRoute><Dashboard /></AuthRoute>,
    children: [
      {
        path: 'exams',
        element: <Exams />
      },
      {
        path: 'exams/creation',
        element: <ExamCreation />
      },
      {
        path: 'exams/:id/edition',
        element: <ExamEdition />
      },
      {
        path: 'classes',
        element: <Classes />
      },
      {
        path: 'classes/creation',
        element: <ClassCreation />
      },
      {
        path: 'classes/:id/edition',
        element: <ClassEdition />
      }
    ]
  },
  {
    path: '*',
    element: 'Not Found'
  }
]

const router = createBrowserRouter(routes)

export function Routes() {
  return <RouterProvider router={router} />
}

function AuthRoute({ children }: { children: ReactNode }) {
  const { signed, firstChecked } = useAuthentication()

  if (firstChecked && signed) {
    return <>{children}</>
  }

  if (firstChecked && !signed) {
    return <Navigate to="/" />
  }

  return <></>
}
