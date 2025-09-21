import React, { useState } from 'react';

const MessageInput: React.FC<{ onSend: (message: string) => void }> = ({ onSend }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim()) {
            onSend(input);
            setInput('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center p-4 bg-white rounded-lg shadow-md">
            <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                rows={2}
                className="flex-grow border rounded-lg p-3 mr-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 min-h-[48px] max-h-32"
                style={{ fontSize: '1rem' }}
            />
            <button type="submit" className="bg-blue-500 text-white rounded-lg px-4 py-2 font-semibold shadow">
                Send
            </button>
        </form>
    );
};

export default MessageInput;