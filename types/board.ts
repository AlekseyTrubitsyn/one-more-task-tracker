import { IProject } from "./project"
import { IUser } from "./user"

export interface IBoard {
  id: string
  name: string
  userGroups: string[]
  tags: string[]
  project: IProject
  owners: IUser[]
}
