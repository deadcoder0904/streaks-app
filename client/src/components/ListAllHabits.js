import { Box, Flex, Text } from '@chakra-ui/core'
import React from 'react'
import { useQuery } from 'urql'
import { LIST_ALL_HABITS_QUERY } from '../graphql/index'
import { getIcon } from '../utils/index'
import { CreateHabit, Error, Habit, Loading } from './index'

export const ListAllHabits = () => {
  const [{ fetching, error, data }] = useQuery({ query: LIST_ALL_HABITS_QUERY })

  if (fetching) return <Loading />
  if (error) return <Error />
  const noHabits = !data.habits.length

  return (
    <Flex
      justify='center'
      align='center'
      flexWrap='wrap'
      flexDirection={noHabits ? 'column' : 'row'}
    >
      {noHabits && (
        <Text fontWeight='bold' fontSize='3xl' color='tomato'>
          You currently track 0 habits. Add one.
        </Text>
      )}
      <CreateHabit />
      {data.habits.map((habit, i) => (
        <Habit
          key={habit.id}
          id={habit.id}
          index={i}
          name={habit.name}
          streak={habit.streak}
          icon={<Box as={getIcon(habit.name)} size='144px' />}
        />
      ))}
    </Flex>
  )
}
