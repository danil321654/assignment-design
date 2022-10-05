import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../store'

export const parentsSelector = createSelector(
  (state: RootState) =>
    Object.values(state.rows).filter((row) => row.parent === null),
  (parents) => parents,
)

export const levelsRowsSelector = (parentId?: number) =>
  createSelector(
    (state: RootState) =>
      Object.values(state.rows).filter((row) => row.parent === parentId),
    (levels) => levels,
  )
