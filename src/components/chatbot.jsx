import React, { useState, useEffect } from 'react';
import dataset from './dataset/dataset';

const getSimilarityScore = (str1, str2) => {
    let [longer, shorter] = str1.length > str2.length ? [str1, str2] : [str2, str1];
    longer = longer.toLowerCase();
    shorter = shorter.toLowerCase();

    const matchScore = Array.from(longer).reduce((score, char, index) => {
        if (shorter[index] && char === shorter[index]) score++;
        return score;
    }, 0);

    return matchScore / longer.length;
};

const MIN_SIMILARITY_THRESHOLD = 0.6;

const Chatbot = () => {
    const [messages, setMessages] = useState([
        { text: "Hello! How can I assist you today?", sender: "bot" },
    ]);
    const [input, setInput] = useState("");

    useEffect(() => {
        const handleEnterPress = (event) => {
            if (event.key === "Enter") handleSend();
        };

        document.addEventListener("keypress", handleEnterPress);
        return () => document.removeEventListener("keypress", handleEnterPress);
    }, [input]);

    const handleSend = () => {
        if (input.trim()) {
            const userMessage = { text: input, sender: "user" };
            const botResponse = getBotResponse(input.toLowerCase());
            setMessages([...messages, userMessage, botResponse]);
            setInput("");
        }
    };

    const getBotResponse = (message) => {
        let bestMatch = { score: 0, response: null };

        Object.entries(dataset).forEach(([query, response]) => {
            const score = getSimilarityScore(query, message);
            if (score > bestMatch.score) {
                bestMatch = {
                    score,
                    response: `Disease: ${response.Disease}\nDescription: ${response.Description}\nMedicines: ${response.Medicines.join(", ")}\nDiet: ${response.Diet.join(", ")}`,
                };
            }
        });

        if (bestMatch.score >= MIN_SIMILARITY_THRESHOLD) {
            return { text: bestMatch.response, sender: "bot" };
        } else {
            return { text: "Your personal health assistant, guiding you through symptoms. Please try rephrasing your question.", sender: "bot" };
        }
    };

    return (
        <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
            <div className="messages space-y-4">
                {messages.map((msg, index) => (
                    <div key={index} className={`message p-3 rounded-lg ${msg.sender === 'user' ? 'bg-seagreen text-white' : 'bg-gray'}`}>
                        <p>{msg.text}</p>
                    </div>
                ))}
            </div>
            <div className="input-area mt-4 flex items-center space-x-2">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 p-2 border border-gray-300 rounded-md"
                />
                <button
                    onClick={handleSend}
                    className="p-2 bg-seagreen hover:underline text-white rounded-md transition duration-300"
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default Chatbot;
