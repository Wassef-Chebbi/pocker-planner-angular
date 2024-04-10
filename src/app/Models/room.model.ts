
export class Room {
  idSession!: number;
  name!: string;
  startTime!: Date;
  endTime!: Date;
  description!: string;
  status: RoomStatus = RoomStatus.ACTIVE;

}
export enum RoomStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  PENDING = 'PENDING'
}
