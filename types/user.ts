import { IUserGroup } from "./userGroup"

export interface IUser {
  id: string
  name: string
  avatar?: string
  groups: IUserGroup[]
}
