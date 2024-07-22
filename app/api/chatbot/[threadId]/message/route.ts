
import { Message, ReqMessage, ResponseMessages } from "../../../../_shared/types"
import { NextRequest } from "next/server";
import { NextResponse } from 'next/server';
import submitMessage from "./utils/submitMessage";
import * as Yup from 'yup';

const AI_API_KEY = process.env.OPENAI_API_KEY
const ASSISTANT_ID = process.env.ASSISTANT_ID

const headers = {
  'Authorization': `Bearer ${AI_API_KEY}`,
  'Content-Type': 'application/json',
  'OpenAI-Beta': 'assistants=v1',
}

const messageSchema = Yup.object().shape({
  message: Yup.object().shape({
    role: Yup.string().oneOf(['user', 'system']).required('Role is required'),
    content: Yup.string().required('Content is required'),
  }).required('Message is required')
});

export async function POST(request: NextRequest, { params }: { params: { threadId: string } }) {

  const reqMessage :ReqMessage   = await request.json()
  const threadId = params.threadId
  
  try {
    await messageSchema.validate(reqMessage);

    const sMessage = await submitMessage(threadId, reqMessage.message, headers)
    const rThread = await runThread(threadId)

    await delay(3000); // Wait for 3 seconds
    const messages = await getMessages(params.threadId)
    return NextResponse.json(messages);
  } catch (err) {
    return NextResponse.json({ success: false, messages: [], error: err })
  }
}

function delay(ms :number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


async function runThread(threadId: string) {
  const url = `https://api.openai.com/v1/threads/${threadId}/runs`
  const body = {
    "assistant_id": ASSISTANT_ID
  }
    const response = await fetch(url, { method: 'POST', headers, body: JSON.stringify(body) })
    if (!response.ok) throw new Error(`Error Running Thread`)

    return Response.json({ success: true , response})



}


async function getMessages(threadId: string): Promise<ResponseMessages> {
  const url = `https://api.openai.com/v1/threads/${threadId}/messages`
    const res = await fetch(url, { method: 'GET', headers })
    if (!res.ok) throw new Error(`Error Getting Messages `)


    const data = (await res.json()).data
    console.log('data')
    console.log(data)

    const messages: Message[] =  await data.reverse().map((content: any) => {
      return { role: content.role, content: content.content[0].text.value }


    })
    console.log('messages')
    console.log(messages)
    return { success: true, messages }

}
