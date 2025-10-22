import React, { useEffect, useRef, useState } from "react";

interface Props {
  onSend: (message: string) => void | Promise<void>;
  disabled?: boolean;
}

const MessageInput: React.FC<Props> = ({ onSend, disabled }) => {
  const [input, setInput] = useState("");
  const taRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    taRef.current?.focus();
  }, []);

  const submit = async () => {
    const text = input.trim();
    if (!text || disabled) return;
    await onSend(text);
    setInput("");
    taRef.current?.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      void submit();
    }
  };

  return (
    <div className="flex items-end gap-2 bg-white rounded-xl shadow p-3">
      <textarea
        ref={taRef}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={onKeyDown}
        placeholder="Type your message…"
        rows={1}
        className="flex-1 border rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 min-h-[44px] max-h-40"
        style={{ fontSize: "1rem" }}
        disabled={disabled}
      />
      <button
        type="button"
        onClick={submit}
        disabled={disabled || !input.trim()}
        className="bg-blue-600 text-white rounded-lg px-4 py-2 font-medium shadow disabled:opacity-60"
        aria-label="Send message"
        title="Send (Enter)"
      >
        {disabled ? "Sending…" : "Send"}
      </button>
    </div>
  );
};

export default MessageInput;
