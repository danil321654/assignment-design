import { Grid, IconButton, Typography } from '@mui/material'
import { GridBorderBottom } from './style'
import { ExpandMore } from '@mui/icons-material'

export const SidebarHeader = () => {
  return (
    <GridBorderBottom
      container
      item
      justifyContent="space-between"
      alignItems="center"
      wrap="nowrap"
      height={42}
      pl={2.5}
      sx={{ color: '#A1A1AA' }}
    >
      <Grid container direction="column" justifyContent="center" wrap="nowrap">
        <Typography variant="body2" whiteSpace="nowrap">
          Название проекта
        </Typography>
        <Typography variant="body2" whiteSpace="nowrap" fontSize={10}>
          Аббревиатура
        </Typography>
      </Grid>
      <IconButton>
        <ExpandMore />
      </IconButton>
    </GridBorderBottom>
  )
}
