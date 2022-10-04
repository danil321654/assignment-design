import { Grid, Typography } from '@mui/material'
import { GridBorderBottom } from './style'

export const TableHeader = () => {
  return (
    <GridBorderBottom container item height={42} width="100%">
      <Grid item xs={0.79} px={1.5} py={0.75}>
        <Typography variant="caption" sx={{ color: '#A1A1AA' }}>
          Уровень
        </Typography>
      </Grid>
      <Grid item xs={5.45} px={1.5} py={0.75}>
        <Typography variant="caption" sx={{ color: '#A1A1AA' }}>
          Наименование работ
        </Typography>
      </Grid>
      <Grid item xs={1.44} px={1.5} py={0.75}>
        <Typography variant="caption" sx={{ color: '#A1A1AA' }}>
          Ед. изм.
        </Typography>
      </Grid>
      <Grid item xs={1.44} px={1.5} py={0.75}>
        <Typography variant="caption" sx={{ color: '#A1A1AA' }}>
          Количество
        </Typography>
      </Grid>
      <Grid item xs={1.44} px={1.5} py={0.75}>
        <Typography variant="caption" sx={{ color: '#A1A1AA' }}>
          Цена за ед.
        </Typography>
      </Grid>
      <Grid item xs={1.44} px={1.5} py={0.75}>
        <Typography variant="caption" sx={{ color: '#A1A1AA' }}>
          Стоимость
        </Typography>
      </Grid>
    </GridBorderBottom>
  )
}
