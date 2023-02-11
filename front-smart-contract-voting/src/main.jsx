import React from 'react'
import ReactDOM from 'react-dom/client'
import Dapp from './Dapp'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <Dapp />
    </ChakraProvider>
  </React.StrictMode>,
)
