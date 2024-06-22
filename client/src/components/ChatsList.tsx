import ChatIcon from './ChatIcon'

export default function ChatsList() {
    const placeholderChatArray = new Array(69).fill({})
  return (
    <section className='flex flex-wrap p-4 justify-center gap-2'>
{placeholderChatArray.map((chat)=> <ChatIcon chat={chat}/>)}
    </section>
  )
}
