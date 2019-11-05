import gql from 'graphql-tag'

export const DELETE_HABIT_MUTATION = gql`
  mutation deleteHabit($id: ID!) {
    deleteHabit(where: { id: $id }) {
      id
      name
      streak
    }
  }
`
