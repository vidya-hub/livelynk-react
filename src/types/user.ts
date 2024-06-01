import Contact from "./contact";

interface User {
  userId?: number;
  username: string;
  email?: string;
  roomId?: string;
  unRequestedUsers?: { [key: number]: Contact };
  requestedUsers?: { [key: number]: Contact };
  invitedUsers?: { [key: number]: Contact };
  acceptedUsers?: { [key: number]: Contact };
  originalUsers?: { [key: number]: Contact };
}
export default User;
