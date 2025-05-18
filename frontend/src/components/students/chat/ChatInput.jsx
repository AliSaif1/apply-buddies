import { useState } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';

const ChatInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSendMessage(message);
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="border-t border-gray-200 p-4">
      <div className="flex items-center">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
        />
        <button
          type="submit"
          disabled={!message.trim()}
          className={`bg-accent hover:bg-accent-dark text-white px-4 py-2 rounded-r-lg transition-colors ${
            !message.trim() ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          <PaperAirplaneIcon className="h-5 w-5" />
        </button>
      </div>
    </form>
  );
};

export default ChatInput;