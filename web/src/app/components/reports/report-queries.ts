import { gql } from 'apollo-angular';

export class ReportQueries {
  static reportsInfo = gql`
    {
      getReports {
        id
        type
        description
        data
        date
        created_by
      }
    }
  `;
}
