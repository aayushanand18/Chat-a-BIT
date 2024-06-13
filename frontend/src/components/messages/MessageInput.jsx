import { BsSend } from 'react-icons/bs';

const MessageInput = () => {

  return (
    <div className="px-4 my-3 relative">
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full bg-gray-700 border-gray-600 text-white pr-10"
          placeholder="Send a message"
        />
        <button
          type="submit"
          className="absolute inset-y-0 right-0 flex items-center pr-3"
        >
          <BsSend className="text-white" />
        </button>
      </div>
    </div>
  );
}

export default MessageInput;

