import { Grid } from '@mui/material'
import { NewRowData, Level } from '~/types'
import { FC, useRef } from 'react'
import { useTypedDispatch } from '~/store'
import { GridBorderBottom } from './style'
import { Level1Icon, Level2Icon, Level3Icon } from '~/images'
import { addRow } from '~/store/reducers'
import Xarrow from 'react-xarrows'
import { TableCell } from './TableCell'

interface Props {
  level: Level
  parent: number | null
  onCreate: () => void
}

const IconLevelMap = {
  1: Level1Icon,
  2: Level2Icon,
  3: Level3Icon,
}

const getEmptyDataRow = (
  parent: Props['parent'],
  level: Props['level'],
): NewRowData => ({
  title: '',
  unit: '',
  quantity: 0,
  unitPrice: 0,
  price: 0,
  parent,
  type: level > 2 ? 'row' : 'level',
})

export const CreateTableRow: FC<Props> = ({ level, parent, onCreate }) => {
  const dispatch = useTypedDispatch()
  const LevelIcon = IconLevelMap[level]
  const data = useRef(getEmptyDataRow(parent, level))

  const isRow = level > 2

  const changeHandler =
    (field: keyof NewRowData) => (newValue: number | string) => {
      data.current = { ...data.current, [field]: newValue }
      data.current = {
        ...data.current,
        price:
          data.current.type === 'row'
            ? data.current.quantity * data.current.unitPrice
            : data.current.price,
      }
      console.log(data.current)
    }

  const onSave = () => {
    dispatch(addRow(data.current))
    onCreate()
  }

  return (
    <>
      <GridBorderBottom container item height={60} width="100%">
        <Grid
          container
          item
          xs={0.79}
          pl={2}
          pr={4}
          direction="column"
          justifyContent="center"
          alignItems={
            !data.current.parent
              ? 'flex-start'
              : data.current.type === 'row'
              ? 'flex-end'
              : 'center'
          }
          onDoubleClick={(e) => {
            e.stopPropagation()
          }}
        >
          <Grid
            container
            width="min-content"
            alignItems="center"
            px={0.875}
            sx={{
              borderRadius: 1.5,
              zIndex: 9999,
            }}
            gap={0.875}
            wrap="nowrap"
          >
            <LevelIcon id={`row-new`} />
          </Grid>
        </Grid>
        <TableCell
          isEdit
          xs={5.45}
          value={data.current.title}
          changeHandler={changeHandler('title')}
          saveHandler={onSave}
        />
        <TableCell
          isEdit={isRow}
          value={isRow ? data.current.unit : ''}
          changeHandler={changeHandler('unit')}
          saveHandler={onSave}
        />
        <TableCell
          isEdit={isRow}
          value={isRow ? data.current.quantity : ''}
          changeHandler={changeHandler('quantity')}
          saveHandler={onSave}
        />
        <TableCell
          isEdit={isRow}
          value={isRow ? data.current.unitPrice : ''}
          changeHandler={changeHandler('unitPrice')}
          saveHandler={onSave}
        />
        <TableCell
          value={data.current.price}
          onDoubleClick={(e) => {
            e.stopPropagation()
          }}
        />
      </GridBorderBottom>
      {data.current.parent && (
        <Xarrow
          start={`row-new`}
          end={`row-${data.current.parent}`}
          endAnchor="middle"
          startAnchor="left"
          color="#C6C6C6"
          showHead={false}
          path="grid"
          strokeWidth={1}
        />
      )}
    </>
  )
}
