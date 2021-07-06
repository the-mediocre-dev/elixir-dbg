import React from 'react'
import { HStack } from '@chakra-ui/react'

import Editor from './Editor'
import Explorer from './Explorer'
import NavBar from './NavBar'

const App = () => {
  return (
    <HStack spacing="0px" height="100%">
      <NavBar />
      <Explorer />
      <Editor />
    </HStack>
  )
}

export default App
