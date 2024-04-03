
export class Session {

  idSession!: number;
  name!: string;
  startTime!: Date;
  endTime!: Date;
  description!: string;
  status: SessionStatus = SessionStatus.ACTIVE;

}
  export enum SessionStatus {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
    PENDING = 'PENDING'
  }
