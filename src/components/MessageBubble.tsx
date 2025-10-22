import React from "react";

interface MessageBubbleProps {
  content: string;
  sender: "user" | "assistant";
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ content, sender }) => {
  const isUser = sender === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={[
          "max-w-[80%] rounded-2xl px-4 py-2 shadow",
          "whitespace-pre-wrap break-words",
          isUser ? "bg-blue-600 text-white" : "bg-white text-gray-900 border",
        ].join(" ")}
      >
        {content}
      </div>
    </div>
  );
};

export default MessageBubble;
