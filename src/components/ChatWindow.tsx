import React, { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";
import MessageInput from "./MessageInput";
import useChat from "../hooks/useChat";

const ChatWindow: React.FC = () => {
    const { messages, sendMessage, loading, error } = useChat();
    const listRef = useRef<HTMLDivElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom on new messages
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages.length]);

    return (
        <div className="flex flex-col h-[calc(100vh-80px)] bg-gray-100">
            <div ref={listRef} className="flex-1 overflow-y-auto p-4 space-y-2" style={{ minHeight: 0 }}>
                {messages.length === 0 ? (
                    <div className="text-center text-gray-500 mt-10">Start the conversation…</div>
                ) : (
                    messages.map((m) => (
                        <MessageBubble key={m.id} content={m.content} sender={m.sender} />
                    ))
                )}
                <div ref={bottomRef} />
            </div>

            {error && <div className="px-4 py-2 text-sm text-red-600 border-t bg-white">{error}</div>}

            <div className="p-4 bg-gray-100 border-t">
                <MessageInput onSend={sendMessage} disabled={loading} />
            </div>
        </div>
    );
};

export default ChatWindow;
