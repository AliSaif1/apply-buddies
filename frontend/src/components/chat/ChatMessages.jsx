import { motion } from 'framer-motion';
import Message from './Message';

const ChatMessages = ({ messages, currentUserId }) => {
  if (messages.length === 0) {
    return (
      <div className="flex justify-center items-center h-32 text-gray-500">
        No messages yet. Start the conversation!
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {messages.map((message, index) => (
        <motion.div
          key={message.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
        >
          <Message 
            message={message} 
            isCurrentUser={message.senderId === currentUserId} 
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ChatMessages;