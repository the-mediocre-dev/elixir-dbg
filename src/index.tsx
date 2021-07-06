import React from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider } from '@chakra-ui/react'

import App from './components/App'

const Root = () => {
  return (
    <ChakraProvider>
      <App />
    </ChakraProvider>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'))
