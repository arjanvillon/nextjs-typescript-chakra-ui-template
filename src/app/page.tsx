'use client'

import { AspectRatio, Center, Stack, Heading } from '@chakra-ui/react'
import { NextPage } from 'next'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <Center h="100vh">
      <Stack align="center" gap="8">
        <AspectRatio ratio={283 / 64} w="200px">
          <Image
            src="/vercel.svg"
            alt="vercel"
            fill
            sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
          />
        </AspectRatio>

        <Heading size="3xl">NextJS-Typescript-Chakra-UI-Template</Heading>
      </Stack>
    </Center>
  )
}

export default Home
