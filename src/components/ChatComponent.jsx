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
  const [previewFile, setPreviewFile] = useState(null); // New state for file preview
  const [showModal, setShowModal] = useState(false); // New state for modal visibility
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
    if (newMessage.trim() === '' && !file && !previewFile) return;

    const chatDocRef = doc(db, 'chats', chatId);
    const now = new Date();
    let fileURL = null;

    if (file) {
      const storageRef = ref(storage, `chat_files/${chatId}/${file.name}`);
      try {
        const snapshot = await uploadBytes(storageRef, file);
        fileURL = await getDownloadURL(snapshot.ref);
        setFile(null);
        setPreviewFile(null); // Clear preview file after sending
      } catch (error) {
        console.error('Error uploading file: ', error);
        return;
      }
    }

    const messageObject = {
      text: newMessage || (file ? '' : ''),
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
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setPreviewFile(URL.createObjectURL(selectedFile)); // Create a preview URL
      setShowModal(true); // Show the modal
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setPreviewFile(null); // Clear preview file when closing modal
    setFile(null); // Clear the selected file
  };

  const handleSendFile = async () => {
    await handleSendMessage();
    handleCloseModal(); // Close the modal after sending
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent the default behavior of the Enter key
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex-grow overflow-y-auto p-4">
        {messages.length === 0 ? (
          <p>No messages yet.</p>
        ) : (
          messages.map((msg, index) => (
            <div
              key={index}
              className={`flex mb-4 items-start ${msg.senderId === auth.currentUser.uid ? 'justify-end' : 'justify-start'}`}
            >
              <div className="w-max grid">
                <div className={`px-3.5 py-2 rounded-3xl inline-flex items-center text-white gap-3 ${msg.senderId === auth.currentUser.uid ? 'bg-seagreen-200 rounded-tr-none' : 'bg-seablue-200 rounded-tl-none'}`}>
                  {msg.fileURL ? (
                    <img
                      src={msg.fileURL}
                      alt="Uploaded"
                      className="max-w-xs max-h-60 rounded-lg mb-2"
                    />
                  ) : (
                    <h5 className="text-sm font-normal leading-snug">{msg.text}</h5>
                  )}
                </div>
                <div className={`mt-1 text-xs font-normal leading-4 ${msg.senderId === auth.currentUser.uid ? 'text-right' : 'text-left'}`}>
                  <h6 className="text-gray-500 py-1">{msg.formattedTime}</h6>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="w-full pl-3 pr-1 py-2 rounded-3xl border border-gray-200 flex items-center gap-2 mx-auto max-w-screen-xl mt-4 mb-4">
        <div className="flex items-center gap-2 flex-grow">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type here..."
            className="grow text-black text-xs font-medium leading-4 focus:outline-none"
          />
        </div>
        <label className="cursor-pointer flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none" className="text-gray-500">
            <path d="M14.9332 7.79175L8.77551 14.323C8.23854 14.8925 7.36794 14.8926 6.83097 14.323C6.294 13.7535 6.294 12.83 6.83097 12.2605L12.9887 5.72925M12.3423 6.41676L13.6387 5.04176C14.7126 3.90267 16.4538 3.90267 17.5277 5.04176C18.6017 6.18085 18.6017 8.02767 17.5277 9.16676L16.2314 10.5418M16.8778 9.85425L10.72 16.3855C9.10912 18.0941 6.49732 18.0941 4.88641 16.3855C3.27549 14.6769 3.27549 11.9066 4.88641 10.198L11.0441 3.66675" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <input
            type="file"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
        <button
          onClick={handleSendMessage}
          className="flex items-center px-3 py-2 bg-gradient-to-r from-seablue to-seagreen rounded-full shadow text-white text-xs font-semibold leading-4"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M9.04071 6.959L6.54227 9.45744M6.89902 10.0724L7.03391 10.3054C8.31034 12.5102 8.94855 13.6125 9.80584 13.5252C10.6631 13.4379 11.0659 12.2295 11.8715 9.81261L13.0272 6.34566C13.7631 4.13794 14.1311 3.03408 13.5484 2.45139C12.9657 1.8687 11.8618 2.23666 9.65409 2.97257L6.18714 4.12822C3.77029 4.93383 2.56187 5.33664 2.47454 6.19392C2.38721 7.0512 3.48957 7.68941 5.69431 8.96584L5.92731 9.10074C6.23326 9.27786 6.38623 9.36643 6.50978 9.48998C6.63333 9.61352 6.72189 9.7665 6.89902 10.0724Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
          <span className="ml-2">Send</span>
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg shadow-lg w-80">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg pl-3 font-semibold">Preview</h3>
              <button onClick={handleCloseModal} className="text-black w-6 border shadow rounded hover:shadow-md hover:shadow-red transition-shadow duration-300 ease-out">
                &times;
              </button>
            </div>
            {previewFile && (
              <div className="mb-4">
                <img
                  src={previewFile}
                  alt="Preview"
                  className="max-w-full max-h-60 rounded-lg"
                />
              </div>
            )}
            <div className="flex justify-end">
              <button
                onClick={handleSendFile}
                className="px-4 py-2 bg-gradient-to-r from-seablue to-seagreen text-white rounded-full"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatScreen;
