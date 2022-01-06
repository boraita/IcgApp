import { gql } from 'apollo-angular';

export class UserQueries {
  static getAllUsers = gql`
    {
      users {
        id
        name
      }
    }
  `;
}
