import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { NewRowData, RowData } from '~/types'
import { editRow, saveRow } from '~/utils'

const initialState: Record<number, RowData> = {
  1: {
    id: 1,
    title: 'Южная строительная площадка',
    unit: '',
    quantity: 0,
    unitPrice: 0,
    price: 1209122.5,
    parent: null,
    type: 'level',
  },
  2: {
    id: 2,
    title: 'Фундаментальные работы',
    unit: '',
    quantity: 0,
    unitPrice: 0,
    price: 1209122.5,
    parent: 1,
    type: 'level',
  },
  3: {
    id: 3,
    title: 'Статья работы № 1',
    unit: 'м3',
    quantity: 1750,
    unitPrice: 108.07,
    price: 189122.5,
    parent: 2,
    type: 'row',
  },
  4: {
    id: 4,
    title: 'Статья работы № 2',
    unit: 'л',
    quantity: 1200,
    unitPrice: 850,
    price: 1020000,
    parent: 2,
    type: 'row',
  },
}

const applyChanges = (current: typeof initialState, changed: RowData[]) => {
  changed.forEach((item) => {
    current[item.id] = item
  })
}

const rowSlice = createSlice({
  name: 'row',
  initialState,
  reducers: {
    addRow: (state, action: PayloadAction<NewRowData>) => {
      const result = saveRow(action.payload, Object.values(state))
      applyChanges(state, [...result.changed, result.current])
    },
    changeRow: (state, action: PayloadAction<RowData>) => {
      const result = editRow(action.payload, Object.values(state))
      applyChanges(state, [...result.changed, result.current])
    },
  },
})

export const { addRow, changeRow } = rowSlice.actions
export default rowSlice.reducer
