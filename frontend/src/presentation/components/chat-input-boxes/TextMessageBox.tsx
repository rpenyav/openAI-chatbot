import React, { useState } from "react";

interface Props {
  onSendMessage: (message: string) => void;
  placeholder?: string;
  disableCorrections?: boolean;
}

export const TextMessageBox = ({
  onSendMessage,
  placeholder,
  disableCorrections = false,
}: Props) => {
  const [message, setMessage] = useState("");

  const handleSendMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (message.trim().length === 0) return;

    onSendMessage(message);
    setMessage("");
  };

  return (
    <form
      className="flex flex-row items-center px-4 w-full h-16 bg-white rounded-xl"
      onSubmit={handleSendMessage}
    >
      <div className="flex-grow">
        <div className="relative w-full">
          <input
            type="text"
            autoFocus
            name="message"
            placeholder={placeholder}
            autoComplete={disableCorrections ? "on" : "off"}
            autoCorrect={disableCorrections ? "on" : "off"}
            spellCheck={disableCorrections ? "true" : "false"}
            className="flex w-full border rounded-xl text-gray-800
             placeholder-gray-400 
             bg-gray-200 
             border-gray-200 
             focus:outline-none 
             focus:border-indigo-300 pl-4 h-10"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </div>
      </div>
      <div className="ml-4">
        <button className="btn-primary">
          <span className="mr-2">Send</span>
          <i className="fa-regular fa-paper-plane"></i>
        </button>
      </div>
    </form>
  );
};
