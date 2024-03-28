const ChatMessage =(props)=>{
    return(
        <div className="flex items-center shadow-sm p-2 "   >
            <img className='h-8'  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDt6YUZ8byMEXMW-FqLnk72EfrpTC-hcBKjQ&usqp=CAU' />
            <span className="font-bold px-2"  >{props.name}</span>
            <span>{props.message}</span>
        </div>
    )
}

export default ChatMessage;