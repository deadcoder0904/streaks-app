import gql from 'graphql-tag'

export const INCREMENT_STREAK_MUTATION = gql`
  mutation incrementStreak($name: String) {
    incrementStreak(name: $name) {
      streak
    }
  }
`
