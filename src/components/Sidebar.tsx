import { Grid, Typography } from '@mui/material'
import { SidebarHeader } from './SidebarHeader'
import { Dashboard } from '@mui/icons-material'
import { GridBorderRight } from './style'

const SIDEBAR_ITEMS = [
  'По проекту',
  'Объекты',
  'РД',
  'МТО',
  'СМР',
  'График',
  'МиМ',
  'Рабочие',
  'Капвложения',
  'Бюджет',
  'Финансирование',
  'Панорамы',
  'Камеры',
  'Поручения',
  'Контрагенты',
]

export const Sidebar = () => {
  return (
    <GridBorderRight
      container
      item
      direction="column"
      width={234}
      flexShrink={0}
    >
      <SidebarHeader />
      {SIDEBAR_ITEMS.map((item) => (
        <Grid
          key={item}
          container
          width="100%"
          height={32}
          gap={2}
          alignItems="center"
          px={2.5}
          sx={{
            background: item === 'СМР' ? '#A1A1AA' : 'unset',
          }}
        >
          <Dashboard /> <Typography variant="body2">{item}</Typography>
        </Grid>
      ))}
    </GridBorderRight>
  )
}
