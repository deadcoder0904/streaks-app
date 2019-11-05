import gql from 'graphql-tag'

export const LIST_ALL_HABITS_QUERY = gql`
  query listAllHabits {
    habits {
      id
      name
      streak
    }
  }
`
