

const Message = () => {
  return (
    <div className="chat chat-end">
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
            <img src={"https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"} alt="TailWind CSS Chat Bubble Component" />
            </div>
        </div>
        <div className={"chat-bubble text-white bg-blue-500"}>Hi! What's Up?</div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 text-black">12:42</div>
    </div>
  )
}

export default Message;