import { Grid, Typography } from '@mui/material'
import { GridBorderBottom } from './style'

export const Tabs = () => {
  return (
    <GridBorderBottom container item height={44} width="100%">
      <Grid
        container
        item
        width={312}
        alignItems="center"
        justifyContent="center"
        sx={{
          borderRight: '1px solid #414144',
        }}
      >
        <Typography variant="body1">Строительно-монтажные работы</Typography>
      </Grid>
    </GridBorderBottom>
  )
}
