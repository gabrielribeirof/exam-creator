import { ArrowRight, CalendarBlank, Exam, ListChecks, Plus, UsersFour, Watch } from 'phosphor-react'

import { DashboardBase } from '../../../components/DashboardBase'

import { Button } from '../../../components/Button'
import { Card } from '../../../components/Card'
import { Grid } from '../styles'
import { useNavigate } from 'react-router-dom'

export function Exams() {
  const navigate = useNavigate()

  return (
    <DashboardBase
      header={{
        icon: Exam,
        title: 'Exams',
        buttons: (
          <Button
            color='blue'
            icon={Plus}
            onClick={() => navigate('/dashboard/exams/creation')}
          >
            Create exam
          </Button>)
      }}
    >
      <Grid>
        <Card
          title='Natural Sciences and Mathematics'
          backgroundColor='#202020'
          textColor='#FFFFFF'
          onClick={() => navigate('/dashboard/exams/123/edition')}
          items={[
            {
              icon: UsersFour,
              name: 'Geometria Analítica'
            },
            {
              icon: ListChecks,
              name: '90 questions'
            },
            {
              icon: Watch,
              name: '50 minutes'
            }
          ]}
          footer={{
            left: {
              icon: CalendarBlank,
              text: '10/12/2022 - 10:00'
            },
            right: {
              icon: ArrowRight,
              text: 'Manage'
            }
          }}
        />

        <Card
          title='Natural Sciences and Mathematics'
          backgroundColor='#202020'
          textColor='#FFFFFF'
          items={[
            {
              icon: UsersFour,
              name: 'Geometria Analítica'
            },
            {
              icon: ListChecks,
              name: '90 questions'
            },
            {
              icon: Watch,
              name: '50 minutes'
            }
          ]}
          footer={{
            left: {
              icon: CalendarBlank,
              text: '10/12/2022 - 10:00'
            },
            right: {
              icon: ArrowRight,
              text: 'Manage'
            }
          }}
        />

        <Card
          title='Natural Sciences and Mathematics'
          backgroundColor='#202020'
          textColor='#FFFFFF'
          items={[
            {
              icon: UsersFour,
              name: 'Geometria Analítica'
            },
            {
              icon: ListChecks,
              name: '90 questions'
            },
            {
              icon: Watch,
              name: '50 minutes'
            }
          ]}
          footer={{
            left: {
              icon: CalendarBlank,
              text: '10/12/2022 - 10:00'
            },
            right: {
              icon: ArrowRight,
              text: 'Manage'
            }
          }}
        />
      </Grid>
    </DashboardBase>
  )
}
