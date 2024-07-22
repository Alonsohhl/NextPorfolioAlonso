"use client"

import React, { useState } from 'react';
import { readDataStream } from "@/lib/read-data-stream";
import { AssistantStatus, Message } from "ai/react";
import { ChangeEvent, FormEvent, useRef, useEffect } from "react";
import { cn } from "@/lib/utils"
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import useChatMessages from './hooks/messages'



const ChatBot = React.memo(() => {

  const [loading, setLoading] = useState(false);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const { submitMessage, messages } = useChatMessages()

  const [status, setStatus] = useState<AssistantStatus>("awaiting_message");


  const [visible, setVisible] = useState(true);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true)
    setIsTyping(true)
    e.preventDefault();
    await submitMessage(message)
    setMessage("")
    setLoading(false)
    setIsTyping(false)
  }
  const handleMessageChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };



  useEffect(()=>{
  }, [messages])


  const switchVisible = () => {
    setVisible(prev => !prev)
  }


  return (
    <>
        <a onClick={switchVisible} className={cn('m-2 p-2 fixed bg-white bottom-2 right-2 text-black font-bold  text-lg cursor-pointer z-10 hover:bg-gray-800',
          { 'hidden': visible }
        )}>
          <div className='rounded-md'>
            <p className='m-0 p-1 '>Show Chat</p>
          </div>
        </a>


        <div className={
          cn('overflow-x-hidden overflow-y-auto bg-gradient-to-b from-al-purple-dark to-gray-950 sthadow-xl border-none z-30 m-2 p-6 fixed max-w-[300px] max-h-[600px] bottom-2 right-0 bg-blue-100 rounded-3xl scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100',
            { 'hidden': !visible }
          )} id='chatbot'>
          <a className=' translate-x-[0.5px] -translate-y-[0.5px] top-0 right-0 z-90 rounded-tr-3xl absolute px-3 py-1 text-white font-bold text-lg hover:bg-gray-800 hover:text-white' onClick={switchVisible}>
            x
          </a>



          <div className="mockup-window border bg-base-300  flex flex-col pt-5">
            <div className='pb-8 flex-grow overflow-hidden'>
              {messages && messages.map((msg, i) => (
                <div className={`chat ${msg.role === 'assistant' ? 'chat-start' : 'chat-end'} `} key={'chatKey' + i}>
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img src={msg.role === 'assistant' ? '/alonso-gpt.jpeg' : '/recruiter.jpeg'} alt={`${msg.role} avatar`} />
                    </div>
                  </div>
                  <div id="message" className={cn(`${msg.role === 'assistant' ? 'bg-blue-950' : 'bg-gray-800'}
                border-solid rounded-md p-2 text-sm break-words`)}>
                    {i != messages.length - 1 && msg.content}
                    {i == messages.length - 1 && <TextGenerateEffect words={msg.content} className='text-white text-sm break-words' />}
                  </div>

                </div>
              ))}
            </div>

            <form className="form-control items-center" onSubmit={handleSubmit} id='Alonso-Chatbot-Form'>

              {!isTyping && messages && messages.length < 2 &&
                <div className='my-2 text-sm bg-yellow-100 rounded-lg text-black focus:bg-blue-700'>
                  <p className='text-sm p-2 m-0'>Feel free to ask questions such as &quot;Who are you&quot; and &quot;What is your skill set?&quot; This chatbot was created purely for entertainment by me.</p>
                </div>
              }
              <div className="input-group relative flex justify-between gap-x-1">

                {isTyping && <small className='absolute -top-12 left-0.5 animate-pulse'>Alonso Bot is Typing...</small>}

                <input type="text" placeholder=" Ask Me Anything"
                  className="input input-bordered flex-grow text-black rounded bg-gray-200 w-1/4 px-2" required
                  onChange={handleMessageChange} disabled={loading} value={message}
                  // onChange={handleMessageChange} value={message}
                   // disabled={false} value={message}
                />
                <button className="bg-blue-950 p-2 rounded" type="submit">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
    </>
  );

})


ChatBot.displayName = 'My Chatbot'

export default ChatBot

