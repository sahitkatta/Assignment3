import { Login } from './Login';
import { MeetingRoom } from './MeetingRoom';
import { Resource } from './Resource';

export interface MeetingRequest {
  requestId: string;
  date: any;
  startTime: any;
  endTime: any;
  user: Login;
  meetingRoom: MeetingRoom;
  resource: Resource;
}
