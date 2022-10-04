import { Grid } from '@mui/material'
import { useTypedSelector } from '~/store'
import { parentsSelector } from '~/store/selectors'
import { TableHeader } from './TableHeader'
import { TableRow } from './TableRow'
import { Tabs } from './Tabs'

export const Table = () => {
  const parents = useTypedSelector(parentsSelector)
  return (
    <Grid
      container
      item
      direction="column"
      width="100%"
      wrap="nowrap"
      sx={{ background: '#202124' }}
    >
      <Tabs />
      <Grid
        container
        item
        direction="column"
        width="100%"
        height="100%"
        p={1.25}
      >
        <TableHeader />
        {parents.map((row) => (
          <TableRow row={row} key={row.id} />
        ))}
      </Grid>
    </Grid>
  )
}
