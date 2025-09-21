import React from 'react';
import MessageBubble from './MessageBubble';
import MessageInput from './MessageInput';
import useChat from '../hooks/useChat';

const ChatWindow: React.FC = () => {
    const { messages, sendMessage } = useChat();

    return (
        <div className="flex flex-col h-[calc(100vh-80px)] bg-gray-100">
            <div className="flex-1 overflow-y-auto p-4" style={{ minHeight: 0 }}>
                {messages.map((msg, index) => (
                    <MessageBubble key={index} content={msg.content} sender={msg.sender} />
                ))}
            </div>
            <div className="p-4 bg-gray-100 border-t">
                <MessageInput onSend={sendMessage} />
            </div>
        </div>
    );
};

export default ChatWindow;