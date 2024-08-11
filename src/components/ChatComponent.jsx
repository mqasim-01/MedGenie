import React, { useEffect, useState } from 'react';
import { db, auth } from '../firebase'; // Import your Firebase setup
import { doc, getDoc, setDoc, updateDoc, arrayUnion, onSnapshot } from 'firebase/firestore';

function ChatScreen({ appointmentId, doctorId, patientId, userRole }) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const chatId = `${doctorId}_${patientId}`;

  useEffect(() => {
    // Fetch and listen to messages in real-time
    const chatDocRef = doc(db, 'chats', chatId);
    
    const unsubscribe = onSnapshot(chatDocRef, (doc) => {
      if (doc.exists()) {
        setMessages(doc.data().messages || []);
      }
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, [chatId]);

  const handleSendMessage = async () => {
    if (newMessage.trim() === '') return;

    const chatDocRef = doc(db, 'chats', chatId);
    const messageObject = {
      text: newMessage,
      senderId: auth.currentUser.uid, // The current user's ID
      timestamp: new Date(), // Use the server timestamp
    };

    try {
      const chatDoc = await getDoc(chatDocRef);
      if (chatDoc.exists()) {
        // If chat document exists, update the messages array
        await updateDoc(chatDocRef, {
          messages: arrayUnion(messageObject)
        });
      } else {
        // If chat document doesn't exist, create it with the first message
        await setDoc(chatDocRef, {
          messages: [messageObject]
        });
      }
      setNewMessage(''); // Clear the input field
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
              {msg.text}
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
