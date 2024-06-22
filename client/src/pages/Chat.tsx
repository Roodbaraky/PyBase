import { useParams } from 'react-router-dom'

export default function Chat() {
    const params = useParams()
    console.log(params)
  return (
   <>
        <div>Chat</div>
        <div>{params.chatId}</div>
   </>
  )
}
