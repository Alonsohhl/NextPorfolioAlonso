
export interface Message {
  role: string
  content: string
}

export interface ResponseMessages{
  success: boolean
  messages: Message[]
}

export interface ReqMessage {
  message: Message
}

