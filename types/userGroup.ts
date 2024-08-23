import { IUser } from "./user"

export interface IUserGroup {
  id: string
  name: string
  description?: string
  owners: IUser[]
  parent?: IUserGroup
}
