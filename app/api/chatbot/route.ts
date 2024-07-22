export async function GET() {
  const threadId = await createThread();
  return Response.json({ success: true, threadId });
}

async function createThread() {
  const GetThreadUrl = `https://api.openai.com/v1/threads`
  const headers = {
    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
    'Content-Type': 'application/json',
    'OpenAI-Beta': 'assistants=v1',
  }

  try {
    const response = await fetch(GetThreadUrl,
      { method: 'POST', headers }
    );
    if (!response.ok) throw new Error(`HTTP error status: ${response.status}`)

    const threadId = (await response.json()).id

    return threadId
  } catch (err) {
    console.error('Problem creating new thread')
  }


}
