import { statusType } from "../components/status/status";

export interface ITask {
  id: number,
  title: string,
  description: string,
  expiredDate: string | null,
  status: statusType,
  createDate: string | null
}

export interface IComment {
  id: number,
  text: string,
  date: string,
  author: IParticipant
}

export interface ITaskFull {
  id: number,
  title: string,
  description: string,
  expiredDate: string | null,
  status: string | null,
  createDate: string | null,
  content: {
    text: string
  },
  comments: IComment[]
}

export interface ITaskCreate {
  title: string,
  description: string,
  content: string,
  expiredDate: string | null
}

export interface IParticipant {
  id: number,
  username: string,
  email: string,
  registrationDate: string,
  role: string | null | undefined
}

export interface IUser {
  username: string,
  email: string,
  id: number | string,
  registrationDate: string
}

export interface ICategory {
  id: number,
  title: string,
  description: string,
  groups: [
    {
      id: number,
      title: string,
      description: string
    }
  ]
}

export interface IStatistics {
  outdate: number,
  total: number,
  completed: number
}