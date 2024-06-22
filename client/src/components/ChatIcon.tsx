import { useNavigate } from "react-router-dom";

const imgPlaceholderURL =
  "https://png.pngtree.com/png-clipart/20190619/original/pngtree-vector-chat-icon-png-image_3998278.jpg";

export default function ChatIcon({ chat }) {
    const navigate = useNavigate()
  const { chatName = "Example Chat", chatImgURL = imgPlaceholderURL, chatIndex = Date.now() } = chat;

  //   const initials = chatName.split(' ')
  //     .map((word: string[]) => word[0].toUpperCase())
  //     .join('');
  // ==============  ^^^ this will be used as placeholder if no chat img =============

  const backgroundImageURL = chatImgURL;
const handleClick = () =>{
navigate(`/chat/${chatIndex}`)
//this might not be the best idea, but it seems to be how facebook messenger does it..
// note: https://www.messenger.com/t/4444411682262001/ - /t/ for groupchats
//  ...  https://www.messenger.com/e2ee/t/7393635534021368 - /e2ee/t/ for single chats...
//e2ee == end to end e?
}
  return (
    <article
      className="relative hover:bg-blend-darken rounded-full w-20 h-20 flex items-center justify-center text-center"
      aria-label={`chat for ${chatName}`}
      style={{
        backgroundImage: `url(${backgroundImageURL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onClick={handleClick}
    >
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity rounded-full">
        <p className="text-white">{chatName}</p>
      </div>
    </article>
  );
}
