export interface ITask{
  id: number,
  title: string,
  description: string,
  expiredDate: string,
  status: string,
  createDate: string
}

export interface IParticipant {
  id: number,
  username: string,
  email: string,
  registrationDate: string,
  role: string
}