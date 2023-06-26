'use client'

import { ChakraProvider } from '@chakra-ui/react'

import theme from 'theme'

interface ProvidersProps {
  children: React.ReactNode
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      {children}
    </ChakraProvider>
  )
}

export default Providers
