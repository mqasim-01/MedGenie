import React, { useEffect, useState } from 'react';
import { db, auth, storage } from '../firebase';
import { doc, getDoc, setDoc, updateDoc, arrayUnion, onSnapshot } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useParams } from 'react-router-dom';
import { FaPaperclip } from 'react-icons/fa'; // FontAwesome for the upload icon

function ChatScreen() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [file, setFile] = useState(null);
  const { chatId } = useParams();

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

    return () => unsubscribe(); 
  }, [chatId]);

  const handleSendMessage = async () => {
    if (newMessage.trim() === '' && !file) return;

    const chatDocRef = doc(db, 'chats', chatId);
    const now = new Date();
    let fileURL = null;

    if (file) {
      const storageRef = ref(storage, `chat_files/${chatId}/${file.name}`);
      try {
        const snapshot = await uploadBytes(storageRef, file);
        fileURL = await getDownloadURL(snapshot.ref);
        setFile(null); 
      } catch (error) {
        console.error('Error uploading file: ', error);
        return;
      }
    }

    const messageObject = {
      text: newMessage || (file ? file.name : ''),
      senderId: auth.currentUser.uid,
      timestamp: now,
      formattedTime: `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`,
      fileURL: fileURL || null,
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
      setNewMessage(''); 
    } catch (error) {
      console.error('Error sending message: ', error);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="chat-screen flex flex-col h-screen bg-gray-100">
      <div className="messages-list flex-grow overflow-y-auto p-4">
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
              {msg.fileURL ? (
                <a href={msg.fileURL} target="_blank" rel="noopener noreferrer" className="text-blue-700">
                  {msg.text || 'Download File'}
                </a>
              ) : (
                <span>{msg.text}</span>
              )}
              <br />
              <small className="text-gray-500">{msg.formattedTime}</small>
            </div>
          ))
        )}
      </div>
      <div className="chat-input mt-4 flex p-4">
        <div className="relative flex-grow">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="w-full p-2 border rounded-l-md pr-10"
          />
          <label className="absolute right-2 top-2 cursor-pointer">
            <FaPaperclip className="text-gray-500" />
            <input
              type="file"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        </div>
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
