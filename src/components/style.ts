import { Grid } from '@mui/material'
import { styled } from '@mui/styles'

const border = '1px solid #414144'

export const GridBorderBottom = styled(Grid)(() => ({
  borderBottom: border,
}))

export const GridBorderRight = styled(Grid)(() => ({
  borderRight: border,
}))
