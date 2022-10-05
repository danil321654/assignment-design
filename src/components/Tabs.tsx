import { Typography } from '@mui/material'
import { GridBorderBottom, GridBorderRight } from './style'

export const Tabs = () => {
  return (
    <GridBorderBottom container item height={44} width="100%">
      <GridBorderRight
        container
        item
        width={312}
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="body1">Строительно-монтажные работы</Typography>
      </GridBorderRight>
    </GridBorderBottom>
  )
}
