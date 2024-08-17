import React, { useEffect, useState } from 'react';
import { db, auth } from '../firebase';
import { doc, getDoc, setDoc, updateDoc, arrayUnion, onSnapshot } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

function ChatScreen() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const { chatId } = useParams(); // Ensure chatId is fetched from the URL parameters

  useEffect(() => {
    if (!chatId) {
      console.error('Chat ID is undefined');
      return;
    }

    const chatDocRef = doc(db, 'chats', chatId);

    const unsubscribe = onSnapshot(chatDocRef, (doc) => {
      if (doc.exists()) {
        setMessages(doc.data().messages || []);
      } else {
        console.error('Chat document does not exist');
      }
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, [chatId]);

  const handleSendMessage = async () => {
    if (newMessage.trim() === '' || !chatId) return;

    const chatDocRef = doc(db, 'chats', chatId);
    const now = new Date();
    const messageObject = {
      text: newMessage,
      senderId: auth.currentUser.uid,
      timestamp: now,
      formattedTime: `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`,
    };

    try {
      const chatDoc = await getDoc(chatDocRef);
      if (chatDoc.exists()) {
        await updateDoc(chatDocRef, {
          messages: arrayUnion(messageObject)
        });
      } else {
        await setDoc(chatDocRef, {
          messages: [messageObject]
        });
      }
      setNewMessage(''); // Clear input field
    } catch (error) {
      console.error('Error sending message: ', error);
    }
  };

  return (
    <div className="chat-screen bg-gray p-4 rounded shadow">
      <div className="messages-list overflow-y-auto h-80">
        {messages.length === 0 ? (
          <p>No messages yet.</p>
        ) : (
          messages.map((msg, index) => (
            <div
              key={index}
              className={`message my-2 p-2 rounded-md ${
                msg.senderId === auth.currentUser.uid ? 'bg-blue-500 text-black self-end' : 'bg-gray-200'
              }`}
              style={{
                textAlign: msg.senderId === auth.currentUser.uid ? 'right' : 'left',
              }}
            >
              <span>{msg.text}</span>
              <br />
              <small className="text-gray-500">{msg.formattedTime}</small>
            </div>
          ))
        )}
      </div>
      <div className="chat-input mt-4 flex">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-grow p-2 border rounded-l-md"
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 text-black p-2 rounded-r-md"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatScreen;
