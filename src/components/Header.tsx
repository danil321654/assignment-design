import { Avatar, Grid, IconButton, Typography } from '@mui/material'
import { GridBorderBottom } from './style'
import { AvatarImage } from '~/images'
import { ExpandMore, Apps, Reply } from '@mui/icons-material'

const headerTabs = ['Просмотр', 'Управление']
const activeTab = 'Просмотр'

export const Header = () => (
  <GridBorderBottom
    container
    item
    height={44}
    width="100%"
    px={2.5}
    alignItems="center"
    justifyContent="space-between"
    wrap="nowrap"
  >
    <Grid
      container
      height="100%"
      alignItems="center"
      width="min-content"
      wrap="nowrap"
      gap={3}
    >
      <Apps htmlColor="#A1A1AA" />
      <Reply htmlColor="#A1A1AA" />
      <Grid
        container
        height="100%"
        width="min-content"
        pl={0.5}
        wrap="nowrap"
        gap={2.5}
      >
        {headerTabs.map((tab) => (
          <Grid
            key={tab}
            container
            height="100%"
            width="min-content"
            alignItems="center"
            sx={{
              borderBottom: tab === activeTab ? '2px solid white' : 'none',
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: tab === activeTab ? 'white' : '#A1A1AA' }}
            >
              {tab}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
    <Grid
      container
      alignItems="center"
      width="min-content"
      wrap="nowrap"
      gap={1}
    >
      <Avatar sx={{ background: 'transparent' }}>
        <img src={AvatarImage} alt="" />
      </Avatar>
      <Grid container alignItems="center" width="min-content" wrap="nowrap">
        <Typography variant="body2" whiteSpace="nowrap">
          Антон петров
        </Typography>
        <IconButton>
          <ExpandMore />
        </IconButton>
      </Grid>
    </Grid>
  </GridBorderBottom>
)
