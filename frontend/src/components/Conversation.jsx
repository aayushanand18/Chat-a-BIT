
const Conversation = () => {
  return <>
  <div className="flex gap-2 items-center hover:bg-violet-800 rounded p-2 py-1 cursor-pointer">
    <div className="avatar online">
    <div className="w-12 rounded-full">
      <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="User Avatar" />
    </div>
    </div>
    <div className="flex flex-col flex-1">
      <div className="flex gap-3 justify-between"></div>
      <p className="font-bold text-gray-300">John Doe</p>
      <span className="text-xl">😊</span>
    </div>
  </div>
  <div className="divider my-0 py-0 h-1"/>
  </>
}

export default Conversation;