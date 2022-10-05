import { Grid, TextField } from '@mui/material'
import { styled } from '@mui/styles'

const border = '1px solid #414144'

export const GridBorderBottom = styled(Grid)(() => ({
  borderBottom: border,
}))

export const GridBorderRight = styled(Grid)(() => ({
  borderRight: border,
}))

export const TextInput = styled(TextField)(() => ({
  width: '100%',
  '& input': {
    fontSize: 14,
    lineHeight: 14,
    padding: 10,
    color: '#71717A',
    border: border,
    borderRadius: 6,
    '&[type=number]': {
      '-moz-appearance': 'textfield',
      appearance: 'textfield',
      margin: 0,
    },
    '&[type=number]::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
    '&[type=number]::-webkit-outer-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
  },
}))
