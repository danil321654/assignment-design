import { Grid } from '@mui/material'
import { Level, RowData } from '~/types'
import { FC, useRef, useState } from 'react'
import { getLevel } from '~/utils'
import { levelsRowsSelector } from '~/store/selectors'
import { useTypedDispatch, useTypedSelector } from '~/store'
import { GridBorderBottom, TextInput } from './style'
import { Level1Icon, Level2Icon, Level3Icon } from '~/images'
import { changeRow } from '~/store/reducers'
import Xarrow from 'react-xarrows'
import { TableCell } from './TableCell'
import { CreateTableRow } from './CreateTableRow'

interface Props {
  row: RowData
  editInitial?: boolean
}

const IconLevelMap = {
  1: Level1Icon,
  2: Level2Icon,
  3: Level3Icon,
}

export const TableRow: FC<Props> = ({ row, editInitial }) => {
  const dispatch = useTypedDispatch()
  const [isEdit, setIsEdit] = useState(!!editInitial)
  const [isShowCreate, setIsShowCreate] = useState(false)
  const [createLevel, setCreateLevel] = useState(0)
  const level = getLevel(row)
  const isRow = row.type === 'row'
  const children = useTypedSelector(levelsRowsSelector(row.id))
  const LevelIcon = IconLevelMap[level]
  const nextIndex = (level + 1) as Level
  const NextLevelIcon = IconLevelMap[nextIndex]
  const data = useRef(row)

  const changeHandler =
    (field: keyof RowData) => (newValue: number | string) => {
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
    if (isEdit) {
      dispatch(changeRow(data.current))
      setIsEdit(false)
    }
  }

  return (
    <>
      <GridBorderBottom
        container
        item
        height={60}
        width="100%"
        onDoubleClick={() => setIsEdit(true)}
      >
        <Grid
          container
          item
          xs={0.79}
          pl={2}
          pr={isShowCreate ? 2.875 : 4}
          direction="column"
          justifyContent="center"
          alignItems={
            !row.parent
              ? 'flex-start'
              : isShowCreate || row.type === 'row'
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
            onMouseOver={() => setIsShowCreate(true && row.type !== 'row')}
            onMouseOut={() => setIsShowCreate(false)}
            alignItems="center"
            px={0.875}
            py={isShowCreate ? 0.875 : 0}
            sx={{
              background: isShowCreate ? '#414144' : 'transparent',
              borderRadius: 1.5,
              zIndex: 9999,
            }}
            gap={0.875}
            wrap="nowrap"
          >
            <LevelIcon
              id={`row-${row.id}`}
              onClick={() => setCreateLevel(level)}
            />
            {isShowCreate && NextLevelIcon && (
              <NextLevelIcon onClick={() => setCreateLevel(level + 1)} />
            )}
          </Grid>
        </Grid>
        <TableCell
          isEdit={isEdit}
          xs={5.45}
          value={row.title}
          changeHandler={changeHandler('title')}
          saveHandler={onSave}
        />
        <TableCell
          isEdit={isEdit && isRow}
          value={isRow ? row.unit : ''}
          changeHandler={changeHandler('unit')}
          saveHandler={onSave}
        />
        <TableCell
          isEdit={isEdit && isRow}
          value={isRow ? row.quantity : ''}
          changeHandler={changeHandler('quantity')}
          saveHandler={onSave}
        />
        <TableCell
          isEdit={isEdit && isRow}
          value={isRow ? row.unitPrice : ''}
          changeHandler={changeHandler('unitPrice')}
          saveHandler={onSave}
        />
        <TableCell
          value={row.price}
          onDoubleClick={(e) => {
            e.stopPropagation()
          }}
        />
      </GridBorderBottom>
      {row.parent && (
        <Xarrow
          start={`row-${row.id}`} //can be react ref
          end={`row-${row.parent}`} //or an id
          endAnchor="middle"
          startAnchor="left"
          color="#C6C6C6"
          showHead={false}
          path="grid"
          strokeWidth={1}
        />
      )}
      {children.map((row) => (
        <TableRow row={row} key={row.id} />
      ))}
      {createLevel > 0 && (
        <CreateTableRow
          parent={createLevel > level ? row.id : row.parent}
          level={createLevel as Level}
          onCreate={() => {
            setCreateLevel(0)
          }}
        />
      )}
    </>
  )
}
