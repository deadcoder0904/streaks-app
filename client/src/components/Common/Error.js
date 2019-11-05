import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Flex,
} from '@chakra-ui/core'
import React from 'react'

export const Error = () => (
  <Flex justify='center' flexWrap='wrap'>
    <Alert status='error'>
      <AlertIcon />
      <AlertTitle mr={2}>Whoops,</AlertTitle>
      <AlertDescription>
        there has been an error. Please try again later!
      </AlertDescription>
    </Alert>
  </Flex>
)
