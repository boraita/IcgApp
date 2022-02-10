import { gql } from 'apollo-angular';

export class ReportQueries {
  static reportsInfo = gql`
    {
      getReports {
        createdBy {
          name
        }
        backupPeople {
          name
        }
        text
        date
        status
        created_date
        type
      }
    }
  `;

  static createReport = gql`
    mutation createReport($report: CreateReportInput!) {
      createReport(createReportInput: $report) {
        status
        type
      }
    }
  `;
}
