"use client"

import React, { useState } from 'react';
import { readDataStream } from "@/lib/read-data-stream";
import { AssistantStatus, Message } from "ai/react";
import { ChangeEvent, FormEvent, useRef, useEffect } from "react";
import { cn } from "@/lib/utils"



import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";

// Assuming you have the types for OpenAI, otherwise you might need to install them or declare a basic type

const ChatBot = () => {
  //  const [messages, setMessages] = useState<Message[]>([
  //    {
  //      content: "It's over Anakin, I have the high ground.",
  //      role: "assistant"
  //    },
  //    {
  //      content: "You underestimate my power!",
  //      role: "user"
  //    }
  //  ]);

  const prompt = "Be a website content assistant, replying only questions about me Alonso/Alonso Huayta/alonso using the information on the files. generating responses no more than 80 words, this was built by Alonso Huayta";
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '0',
      content: "I'm a AI assistant and I can reply questions about Alonso.",
      role: "assistant"
    },
    // {
    //   id: '1',
    //   content: "You underestimate my power!",
    //   role: "user"
    // }
  ]);

  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<string>(prompt);
  const [file, setFile] = useState<File | undefined>(undefined);
  const [status, setStatus] = useState<AssistantStatus>("awaiting_message");
  const [threadId, setThreadId] = useState<string>("");
  const [error, setError] = useState<unknown | undefined>(undefined);


  const [visible, setVisible] = useState(true);



  const [isTyping, setIsTyping] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("in_progress");
    setMessages((messages: Message[]) => [
      ...messages,
      { id: "", role: "user" as "user", content: message! }
    ]);

    const formData = new FormData();
    formData.append("message", message as string);
    formData.append("threadId", threadId);
    formData.append("file", file as File);

    const result = await fetch("/api/gpt", {
      method: "POST",
      body: formData
    });

    if (result.body == null) {
      throw new Error("The response body is empty.");
    }

    try {

      setIsTyping(true);
      for await (const { type, value } of readDataStream(
        result.body.getReader()
      )) {
        switch (type) {
          case "assistant_message": {
            setMessages((messages: Message[]) => [
              ...messages,
              {
                id: value.id,
                role: value.role,
                content: value.content[0].text.value
              }
            ]);
            break;
          }
          case "assistant_control_data": {
            setThreadId(value.threadId);
            setMessages((messages: Message[]) => {
              const lastMessage = messages[messages.length - 1];
              lastMessage.id = value.messageId;
              return [...messages.slice(0, messages.length - 1), lastMessage];
            });
            break;
          }
          case "error": {
            setError(value);
            break;
          }
        }
      }
    } catch (error) {
      setError(error);
    }

    setIsTyping(false);
    setStatus("awaiting_message");

  }
  const handleMessageChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };


  useEffect(() => {
    const loadDefaultFile = async () => {
      try {
        // Replace 'path/to/your/defaultFile' with the actual path to your default asset
        const response = await fetch('/resume.pdf');
        const blob = await response.blob();

        // Replace 'defaultFileName' with your actual file's name and extension
        const defaultFile = new File([blob], 'defaultFileName', { type: blob.type });

        setFile(defaultFile);
        setLoading(false)
      } catch (error) {
        console.error('Error loading default file:', error);
      }
    };

    loadDefaultFile();
  }, []);


  const switchVisible = () => {
    setVisible(prev => !prev)
  }


  return (
    <>
      <a onClick={switchVisible} className={cn('m-2 p-2 fixed bg-white bottom-2 right-2 text-black font-bold  text-lg cursor-pointer',
        { 'hidden': visible }
      )}>
        <div>
          <p className='m-0 p-4'>Show Chat</p>
        </div>
      </a>


      <div className={
        cn('m-2 p-2 fixed  max-w-[350px] max-h-[600px] overflow-y-scroll bottom-2 right-0 bg-black border-solid border-2 border-white rounded-md',
          { 'hidden': !visible }

        )} >
        <a className='rounded-full absolute bg-white px-3 py-1 text-black font-bold text-lg right-2' onClick={switchVisible}>
          x
        </a>



        <div className="mockup-window border bg-base-300 w-full h-full flex flex-col">
          {
            /*
             *        <div className='p-5 pb-8 flex-grow overflow-auto'>
             */

          }
          <div className='p-5 pb-8 flex-grow overflow-auto'>
            {messages.length && messages.map((msg, i) => (
              <div className={`chat ${msg.role === 'assistant' ? 'chat-start' : 'chat-end'}`} key={'chatKey' + i}>
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img src={msg.role === 'assistant' ? '/alonso-gpt.jpeg' : '/recruiter.jpeg'} alt={`${msg.role} avatar`} />
                  </div>
                </div>
                {/*
              <div className="bg-gray-800 border-solid rounded-md p-2 text-sm w-full">{msg.content}</div>


              <div className={`${msg.role === 'assistant' ? 'bg-blue-950' : 'bg-gray-800'}
                border-solid rounded-md p-2 text-sm w-full break-all`}>{msg.content}</div>
              */}
                <div className={cn(`${msg.role === 'assistant' ? 'bg-blue-950' : 'bg-gray-800'}
                border-solid rounded-md p-2 text-sm w-full break-words`)}>
                  {msg.content}
                </div>

              </div>
            ))}
          </div>

          <form className="form-control m-5 items-center" onSubmit={handleSubmit}>

            {messages.length && messages.length < 2 &&
              <div className='my-2 p-2 text-sm bg-yellow-200 rounded-lg text-black '>
                <p className='text-sm h-14'>Feel free to ask questions such as "Who are you?" and "What is your skill set?" This chatbot was created purely for entertainment by Alonso.</p>
              </div>
            }
            <div className="input-group max-w-full w-[800px] relative flex">

              {isTyping && <small className='absolute -top-12 left-0.5 animate-pulse'>Alonso Bot is Typing...</small>}

              <input type="text" placeholder="Type a question for ChatGPT, ask anything!"
                className="input input-bordered flex-grow text-black px-1" required
                onChange={handleMessageChange} disabled={loading}
              />
              <button className="bg-blue-950 p-3 ml-1 rounded" type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );

}

export default ChatBot

