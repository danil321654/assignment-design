import { Grid } from '@mui/material'
import { GridBorderBottom } from './style'

export const Header = () => {
  return (
    <GridBorderBottom
      container
      item
      height={44}
      width="100%"
      px={2.5}
      alignItems="center"
      justifyContent="space-between"
    >
      <span>Header</span>
      <span>Avatar</span>
    </GridBorderBottom>
  )
}
