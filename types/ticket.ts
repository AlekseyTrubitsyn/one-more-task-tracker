import { IBoard } from "./board"
import { IProject } from "./project"
import { ITag } from "./tags"
import { ITicketStatus } from "./ticketStatus"
import { IUser } from "./user"
import { IUserGroup } from "./userGroup"

export interface ITicket {
  id: string
  created: string
  edited: string
  title: string
  description: string
  subscribers: IUser[]
  author: IUser
  performer: IUser
  boards: IBoard[]
  status: ITicketStatus
  estimate: number
  userGroup: IUserGroup
  tags: ITag[]
  project: IProject
  comments: ITicketComment[]
}

export interface ITicketComment {
  id: string
  created: string
  edited: string
  author: IUser
  usersToCall: IUser[]
}
