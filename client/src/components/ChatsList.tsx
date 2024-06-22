import React from 'react'
import ChatIcon from './ChatIcon'

export default function ChatsList() {
    const placeholderChatArray = [{},{},{},{}]
  return (
    <section className='flex flex-wrap p-4 justify-center gap-2'>
{placeholderChatArray.map((chat)=> <ChatIcon chat={chat}/>)}
    </section>
  )
}
