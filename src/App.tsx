import { createTheme, Grid, ThemeProvider } from '@mui/material'
import { Header, Sidebar, Table } from './components'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

export const App = () => {
  // if (isLoading) {
  //   return <>Loading...</>
  // }

  return (
    <ThemeProvider theme={darkTheme}>
      <Grid
        container
        direction="column"
        height="100%"
        wrap="nowrap"
        sx={{ background: '#27272A', color: '#FFFFFF' }}
      >
        <Header />
        <Grid container wrap="nowrap" height="100%">
          <Sidebar />
          <Table />
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}
