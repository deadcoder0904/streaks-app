import { Flex, Spinner } from '@chakra-ui/core'
import React from 'react'

export const Loading = () => (
  <Flex justify='center' flexWrap='wrap'>
    <Spinner
      thickness='4px'
      speed='0.65s'
      emptyColor='gray.200'
      color='blue.800'
      size='xl'
    />
  </Flex>
)
