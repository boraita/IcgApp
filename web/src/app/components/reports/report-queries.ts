import { gql } from 'apollo-angular';

export class ReportQueries {
  static reportsInfo = gql`
    {
      getReports {
        id
        createdBy {
          name
        }
        date
        type
        description
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

  static getReport = gql`
    query getReport($id: String!) {
      getReport(id: $id) {
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
        description
      }
    }
  `;
}
