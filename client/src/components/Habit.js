import { Badge, Flex, Text } from '@chakra-ui/core'
import React from 'react'
import { useMutation } from 'urql'
import { INCREMENT_STREAK_MUTATION } from '../graphql/index'
import { DeleteHabit } from './index'

const colors = [
  'tomato',
  'green.400',
  'yellow.300',
  'cornflowerblue',
  'antiquewhite',
  'aquamarine',
  'lightpink',
  'navajowhite',
  'red.500',
  'lightcoral',
]

export const Habit = ({ index, id, icon, name, streak }) => {
  const bgColor = colors[index % colors.length]
  const [res, executeMutation] = useMutation(INCREMENT_STREAK_MUTATION) // eslint-disable-line no-unused-vars

  return (
    <Flex
      align='center'
      justify='flex-end'
      direction='column'
      bg={bgColor}
      width='300px'
      height='300px'
      borderRadius='40px'
      margin='16px'
      padding='16px'
    >
      {icon}
      <Text fontWeight='hairline' fontSize='3xl' textAlign='center'>
        {name}
        <Badge
          as='span'
          fontWeight='hairline'
          fontSize='xl'
          rounded='full'
          mx='2'
          px='3'
          textTransform='lowercase'
          cursor='pointer'
          onClick={() => executeMutation({ name })}
        >
          {streak}
        </Badge>
        <DeleteHabit id={id} name={name} />
      </Text>
    </Flex>
  )
}
