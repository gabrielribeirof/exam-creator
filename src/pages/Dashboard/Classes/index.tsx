import { useNavigate } from 'react-router-dom'
import { ArrowRight, ListChecks, Plus, UsersFour } from 'phosphor-react'

import { DashboardBase } from '../../../components/DashboardBase'
import { Button } from '../../../components/Button'
import { Card } from '../../../components/Card'
import { Grid } from '../styles'

export function Classes() {
  const navigate = useNavigate()

  return (
    <DashboardBase
      header={{
        icon: UsersFour,
        title: 'Classes',
        buttons: (<Button color='blue' icon={Plus}>Create class</Button>)
      }}
    >
      <Grid>
        <Card
          title='Natural Sciences and Mathematics'
          items={[
            {
              icon: UsersFour,
              name: '0 members'
            },
            {
              icon: ListChecks,
              name: '0 exams'
            }
          ]}
          footer={{
            right: {
              icon: ArrowRight,
              text: 'Manage'
            }
          }}
          onClick={() => navigate('/dashboard/classes/123/edition')}
        />

        <Card
          title='Natural Sciences and Mathematics'
          items={[
            {
              icon: UsersFour,
              name: '0 members'
            },
            {
              icon: ListChecks,
              name: '0 exams'
            }
          ]}
          footer={{
            right: {
              icon: ArrowRight,
              text: 'Manage'
            }
          }}
        />

        <Card
          title='Natural Sciences and Mathematics'
          items={[
            {
              icon: UsersFour,
              name: '0 members'
            },
            {
              icon: ListChecks,
              name: '0 exams'
            }
          ]}
          footer={{
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
