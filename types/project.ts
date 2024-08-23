import { IUser } from "./user"

export interface IProject {
  id: string
  name: string
  description?: string
  owners: IUser[]
}
