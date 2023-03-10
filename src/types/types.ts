export interface IResponse {
  records: {
    id: string;
    createdTime: Date;
    fields: {
      username: string;
      Password: string;
    };
  }[];
  offset: string;
}
