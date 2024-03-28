import ChatMessage from "./ChatMessage"

const LiveChat = ()=>{
    return(
        <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg "   >
            <ChatMessage  
            name="Ayush Joshi"
            message="Learning React"  />
        </div>
    )
}

export default LiveChat