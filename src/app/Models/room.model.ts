
export class Room {
  roomId!: number;
  roomName!: string;
  roomCardSet!: number;
  members!: any[];
  votes!: Vote[];

}
export interface User {
  userId: number;
  userName: string;
  // Add any other properties from the User entity
}

export interface Vote {
  voteId: number;
  voteValue: number;
  highlighted: boolean;
  // Add any other properties from the Vote entity
}
