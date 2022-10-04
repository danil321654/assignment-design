import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { NewRowData, RowData } from '~/types'
import { editRow, saveRow } from '~/utils'

const initialState: RowData[] = [
  {
    id: 0,
    title: 'Южная строительная площадка',
    unit: '',
    quantity: 0,
    unitPrice: 0,
    price: 1209122.5,
    parent: null,
    type: 'level',
  },
  {
    id: 1,
    title: 'Фундаментальные работы',
    unit: '',
    quantity: 0,
    unitPrice: 0,
    price: 1209122.5,
    parent: 0,
    type: 'level',
  },
  {
    id: 2,
    title: 'Статья работы № 1',
    unit: 'м3',
    quantity: 1750,
    unitPrice: 108.07,
    price: 189122.5,
    parent: 1,
    type: 'row',
  },
  {
    id: 3,
    title: 'Статья работы № 2',
    unit: 'л',
    quantity: 1200,
    unitPrice: 850,
    price: 1020000,
    parent: 1,
    type: 'row',
  },
]

const rowSlice = createSlice({
  name: 'row',
  initialState,
  reducers: {
    addRow: (state, action: PayloadAction<NewRowData>) =>
      saveRow(action.payload, state).changed,
    changeRow: (state, action: PayloadAction<RowData>) =>
      editRow(action.payload, state).changed,
  },
})

export const { addRow, changeRow } = rowSlice.actions
export default rowSlice.reducer
