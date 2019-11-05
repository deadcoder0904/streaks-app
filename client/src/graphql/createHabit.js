import gql from 'graphql-tag'

export const CREATE_HABIT_MUTATION = gql`
  mutation createHabit($name: String!, $streak: Int!) {
    createHabit(data: { name: $name, streak: $streak }) {
      id
      name
      streak
    }
  }
`
