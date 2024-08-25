
import { useQuery, useQueryClient } from 'react-query';
import { useState, useCallback, useEffect } from 'react'
import { Message, ReqMessage, ResponseMessages } from '@/app/_shared/types';

export async function fetchChatData() {
  const URL = `${process.env.NEXT_PUBLIC_SITE_URL}/api/chatbot`
  const response = await fetch(URL, { method: 'GET' });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();

}

export async function fetchMessages(threadId: string, msgText: string): Promise<ResponseMessages> {
  const URL = `${process.env.NEXT_PUBLIC_SITE_URL}/api/chatbot/${threadId}/message`
  const reqMsg: ReqMessage = {
    message: {
      role: 'user',
      content: msgText
    }
  }

  const response = await fetch(URL, { method: 'POST', body: JSON.stringify(reqMsg) });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

const useChatLoader = () => {

  // const [threadId, SetThreadId] = useState(null)

  const [messages, setMessages] = useState<Message[]>([])

  // const queryThreadId = useQuery(['newChatThread', trigger], fetchChatData, {
  const { data: {threadId } = {}, error, isLoading } = useQuery('fetchChatData', fetchChatData, {
    cacheTime: 0, // Cache time to zero to ensure it's fetched once per session
    staleTime: Infinity, // Keeps the data fresh for the session duration
    // Optional: configure staleTime, cacheTime, etc.
  });


  const submitMessage = async (message: string) => {
    if (threadId) {
      const messageFetch = await fetchMessages(threadId, message)
      if (messageFetch.success) setMessages(messageFetch.messages)
    }

  }


  useEffect(() => {
    if (threadId !== null) {
    }
  }, [threadId]);
  return { submitMessage, messages }

}

export default useChatLoader

