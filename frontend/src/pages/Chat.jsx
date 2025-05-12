import { useState, useEffect, useRef } from 'react';
import { db } from '../firebase';
import { collection, getDocs, query, orderBy, limit, addDoc, serverTimestamp } from 'firebase/firestore';
import ChatMessages from '../components/chat/ChatMessages';
import ChatInput from '../components/chat/ChatInput';
import ChatHeader from '../components/chat/ChatHeader';

const Chat = ({ currentUser }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const fetchMessages = async () => {
      const q = query(
        collection(db, 'messages'),
        orderBy('timestamp', 'asc'),
        limit(20) // Adjust the limit as per your needs
      );

      const querySnapshot = await getDocs(q);
      const messagesData = [];
      querySnapshot.forEach((doc) => {
        messagesData.push({ id: doc.id, ...doc.data() });
      });
      setMessages(messagesData);
      setLoading(false);
      scrollToBottom();
    };

    fetchMessages();
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async (messageText) => {
    if (!messageText.trim() || !currentUser) return;

    try {
      await addDoc(collection(db, 'messages'), {
        text: messageText,
        senderId: currentUser.uid,
        senderName: currentUser.displayName || 'Anonymous',
        timestamp: serverTimestamp(),
      });
      scrollToBottom();
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="flex flex-col h-full max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <ChatHeader />
      
      <div className="flex-1 overflow-y-auto p-4 bg-neutral-DEFAULT">
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-accent"></div>
          </div>
        ) : (
          <>
            <ChatMessages messages={messages} currentUserId={currentUser?.uid} />
            <div ref={messagesEndRef} />
          </>
        )}
      </div>

      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default Chat;