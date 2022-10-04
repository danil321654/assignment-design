import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../store'

export const parentsSelector = createSelector(
  (state: RootState) => state.rows.filter((row) => row.parent === null),
  (parents) => parents,
)

export const levelsRowsSelector = (parent: number) =>
  createSelector(
    (state: RootState) => state.rows.filter((row) => row.parent === parent),
    (levels) => levels,
  )
