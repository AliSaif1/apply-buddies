const Message = ({ message, isCurrentUser }) => {
  return (
    <div className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-xs md:max-w-md rounded-lg px-4 py-2 ${
          isCurrentUser
            ? 'bg-primary text-white rounded-br-none'
            : 'bg-gray-200 text-gray-800 rounded-bl-none'
        }`}
      >
        {!isCurrentUser && (
          <div className="font-medium text-xs text-primary-dark mb-1">
            {message.senderName}
          </div>
        )}
        <p className="break-words">{message.text}</p>
        <div className={`text-xs mt-1 ${isCurrentUser ? 'text-primary-light' : 'text-gray-500'}`}>
          {message.timestamp?.toDate().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
    </div>
  );
};

export default Message;