
import { useState } from 'react';
import { sendChatMessage } from '../lib/api';
import { ChatMessageDTO, ChatRequest, ChatResponse } from '../types';

export interface ChatMessage {
    id?: string | null;
    content: string;
    sender: 'user' | 'assistant';
}

const useChat = () => {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const sendMessage = async (content: string) => {
        const userMessage: ChatMessage = { content, sender: 'user' };
        setMessages((prevMessages) => [...prevMessages, userMessage]);
        setLoading(true);
        setError(null);

        try {
            const history: ChatMessageDTO[] = messages.map((m) => ({
                role: m.sender,
                content: m.content,
            }));

            const request: ChatRequest = { message: content, history };
            const response: ChatResponse = await sendChatMessage(request);
            const assistantMessage: ChatMessage = { content: response.reply, sender: 'assistant' };
            setMessages((prevMessages) => [...prevMessages, assistantMessage]);
        } catch (error) {
            console.error(error);
            setMessages((prevMessages) => [...prevMessages, { content: "Failed to send message", sender: "assistant" }]);
            setError("Failed to send message");
        } finally {
            setLoading(false);
        }
    };

    return { messages, sendMessage, loading, error };

};

export default useChat;