
import { useState } from 'react';

export interface ChatMessage {
    content: string;
    sender: 'user' | 'bot';
}

const useChat = () => {
    const [messages, setMessages] = useState<ChatMessage[]>([]);

    const sendMessage = async (content: string) => {
        const newMessage: ChatMessage = { content, sender: 'user' };
        setMessages((prevMessages) => [...prevMessages, newMessage]);

        // Simulate sending the message to a language model and receiving a reply
        const reply = await getReplyFromLanguageModel(content);
        const replyMessage: ChatMessage = { content: reply, sender: 'bot' };
        setMessages((prevMessages) => [...prevMessages, replyMessage]);
    };

    const getReplyFromLanguageModel = async (content: string) => {
        // Placeholder for actual API call to the language model
        return new Promise<string>((resolve) => {
            setTimeout(() => {
                resolve(`Reply to: ${content}`);
            }, 1000);
        });
    };

    return {
        messages,
        sendMessage,
    };
};

export default useChat;