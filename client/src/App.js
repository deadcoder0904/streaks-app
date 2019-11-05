import { Text, ThemeProvider } from '@chakra-ui/core'
import React from 'react'
import { createClient, Provider } from 'urql'
import { ListAllHabits } from './components/index'

const client = createClient({
  url: 'http://localhost:4000/',
})

const App = () => (
  <Provider value={client}>
    <ThemeProvider>
      <>
        <Text fontSize='5xl' textAlign='center'>
          Streaks App
        </Text>
        <ListAllHabits />
      </>
    </ThemeProvider>
  </Provider>
)

export default App
