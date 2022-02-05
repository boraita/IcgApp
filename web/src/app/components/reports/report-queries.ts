import { gql } from 'apollo-angular';

export class ReportQueries {
  static reportsInfo = gql`
    {
      getReports {
        description
        createdBy {
          name
          roles
        }
        backupPeople {
          name
          username
          id
        }
        typing {
          type
        }
        text
        date
        status
        created_date
      }
    }
  `;
}
