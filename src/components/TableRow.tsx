import { Grid, Typography } from '@mui/material'
import { RowData } from '~/types'
import { FC } from 'react'
import { getLevel } from '~/utils'
import { levelsRowsSelector } from '~/store/selectors'
import { useTypedSelector } from '~/store'
import { GridBorderBottom } from './style'

interface Props {
  row: RowData
}

export const TableRow: FC<Props> = ({ row }) => {
  const level = getLevel(row)
  const isRow = row.type === 'row'
  const children = useTypedSelector(levelsRowsSelector(row.id))
  return (
    <>
      <GridBorderBottom container item height={60} width="100%">
        <Grid item xs={0.79}>
          <Typography variant="caption">{level}</Typography>
        </Grid>
        <Grid container item xs={5.45} px={1.5} alignItems="center">
          <Typography variant="caption">{row.title}</Typography>
        </Grid>
        <Grid container item xs={1.44} px={1.5} alignItems="center">
          <Typography variant="caption">{isRow ? row.unit : ''}</Typography>
        </Grid>
        <Grid container item xs={1.44} px={1.5} alignItems="center">
          <Typography variant="caption">{isRow ? row.quantity : ''}</Typography>
        </Grid>
        <Grid container item xs={1.44} px={1.5} alignItems="center">
          <Typography variant="caption">
            {isRow ? row.unitPrice : ''}
          </Typography>
        </Grid>
        <Grid container item xs={1.44} px={1.5} alignItems="center">
          <Typography variant="caption">{row.price}</Typography>
        </Grid>
      </GridBorderBottom>
      {children.map((row) => (
        <TableRow row={row} key={row.id} />
      ))}
    </>
  )
}
