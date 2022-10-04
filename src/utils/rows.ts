import { NewRowData, RowData } from '~/types'

// функция для сохранения строки
export function saveRow(rowData: NewRowData, storage: RowData[]) {
  const index = Math.max(...storage.map((v) => v.id), 0) + 1
  const row: RowData = { id: index, ...rowData }

  storage.push(row)
  return {
    current: row,
    changed: recalculation(row.parent, storage),
  }
}

// функция для изменения строки
export function editRow(row: RowData, storage: RowData[]) {
  const index = storage.findIndex((v) => v.id === row.id)
  storage.splice(index, 1, row)

  return {
    current: row,
    changed: recalculation(row.parent, storage),
  }
}

export function recalculation(parentID: number | null, storage: RowData[]) {
  const rows = [...storage]
  const changedRows: RowData[] = []

  if (parentID == null) return changedRows
  let currentParentIndex = rows.findIndex((v) => v.id === parentID)
  if (currentParentIndex === -1) return changedRows
  let currentParent = rows[currentParentIndex]

  do {
    const children = rows.filter((v) => v.parent == currentParent.id)
    const newPrice = children.reduce((acc, v) => acc + v.price, 0)
    if (currentParent.price === newPrice) break

    rows[currentParentIndex].price = newPrice
    changedRows.push(rows[currentParentIndex])

    currentParentIndex = rows.findIndex((v) => v.id === currentParent.parent)
  } while (currentParentIndex !== -1)

  return changedRows
}

type Level = number

export const getLevel = (row: RowData): Level => {
  if (row.parent === null) {
    return 1
  }
  if (row.parent !== null && row.type === 'level') {
    return 2
  }
  return 3
}
