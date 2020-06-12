export interface ITask{
  id: number,
  title: string,
  description: string,
  expiredDate: string | null,
  status: string,
  createDate: string | null
}

export interface IComment {
  id: number,
  text: string,
  date: string,
  author: IParticipant
}

export interface ITaskFull{
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