import React from 'react';

interface MessageBubbleProps {
  content: string;
  sender: 'user' | 'bot';
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ content, sender }) => {
  const bubbleClass = sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black';

  return (
    <div className={`p-3 rounded-lg my-2 ${bubbleClass}`}>
      {content}
    </div>
  );
};

export default MessageBubble;