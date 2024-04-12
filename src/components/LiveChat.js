import { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";

const LiveChat = () => {

    const dispatch = useDispatch();
    const ChatMessages = useSelector((store)=>store.chat.messages)

  useEffect(() => {
    const i = setInterval(() => {
      //API Polling

        dispatch(
            addMessage({
                name: "Ayush",
                message : "Hello checking live chat"
            })
        )

    }, 2000);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll ">
      {
        ChatMessages.map((c,i)=>(
            <ChatMessage key={i} name={c.name} message={c.message} />
        ))
      }
    </div>
  );
};

export default LiveChat;
