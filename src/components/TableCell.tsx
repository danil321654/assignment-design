import { GridProps, Grid, Typography } from '@mui/material'
import { FC, useState } from 'react'
import { TextInput } from './style'

type CellProps = GridProps & {
  value: string | number
  changeHandler?: (arg0: string | number) => void
  isEdit?: boolean
  saveHandler?: () => void
}

export const TableCell: FC<CellProps> = ({
  value,
  changeHandler,
  isEdit,
  saveHandler,
  ...props
}) => {
  const [curValue, setCurValue] = useState(value)

  const isNumber = typeof value === 'number'

  return (
    <Grid
      container
      item
      xs={1.44}
      px={1.5}
      alignItems="center"
      onDoubleClick={(e) => {
        if (value === '') {
          e.stopPropagation()
        }
      }}
      {...props}
    >
      {isEdit ? (
        <TextInput
          value={curValue}
          onChange={(e) => {
            const newValue = e.target.value
            changeHandler?.(isNumber ? +newValue : newValue)
            setCurValue(isNumber ? +newValue : newValue)
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              saveHandler?.()
            }
          }}
          type={isNumber ? 'number' : 'text'}
        />
      ) : (
        <Typography variant="caption">{value}</Typography>
      )}
    </Grid>
  )
}
