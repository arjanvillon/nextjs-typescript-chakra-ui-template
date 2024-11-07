'use client'

import { ChakraProvider } from '@chakra-ui/react'

import system from 'theme'

interface ProvidersProps {
  children: React.ReactNode
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return <ChakraProvider value={system}>{children}</ChakraProvider>
}

export default Providers
