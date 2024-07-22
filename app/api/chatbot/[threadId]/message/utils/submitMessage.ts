import { Message } from '@/app/_shared/types'

export default async function submitMessage(threadId: string, message: Message, headers: any) {
  const requestUrl = `https://api.openai.com/v1/threads/${threadId}/messages`
  const fetchProps = {
    method: 'POST',
    headers,
    body: JSON.stringify(message)
  }
  const response = await fetch(requestUrl, fetchProps);
  if (!response.ok) throw new Error(`Error Submiting Message: ${JSON.stringify(response)}`)
  return response
}
