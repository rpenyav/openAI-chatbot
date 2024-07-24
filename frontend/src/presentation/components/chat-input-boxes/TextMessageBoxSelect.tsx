import React, { useState } from "react";

interface Props {
  onSendMessage: (message: string, selectedOption: string) => void;
  placeholder?: string;
  disableCorrections?: boolean;
  options: Option[];
}

interface Option {
  id: string;
  text: string;
}

export const TextMessageBoxSelect = ({
  onSendMessage,
  placeholder,
  disableCorrections = false,
  options,
}: Props) => {
  const [message, setMessage] = useState("");
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleSendMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (message.trim().length === 0) return;

    onSendMessage(message, selectedOption);
    setMessage("");
  };

  return (
    <form
      className="flex flex-row items-center px-4 w-full h-16 bg-white rounded-xl"
      onSubmit={handleSendMessage}
    >
      <div className="flex-grow">
        <div className="flex">
          <input
            type="text"
            autoFocus
            name="message"
            placeholder={placeholder}
            autoComplete={disableCorrections ? "on" : "off"}
            autoCorrect={disableCorrections ? "on" : "off"}
            spellCheck={disableCorrections ? "true" : "false"}
            className="w-full border rounded-xl text-gray-800
             placeholder-gray-400 
             bg-gray-200 
             border-gray-200 
             focus:outline-none 
             focus:border-indigo-300 pl-4 h-10"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />

          <select
            name="select"
            onChange={(event) => setSelectedOption(event.target.value)}
            className="w-2/5 ml-5 border rounded-xl text-gray-800 focus:outline-none focus:border-indigo-300 pl-4 h-10"
            value={selectedOption}
          >
            <option value="">Select an option</option>
            {options.map((option) => (
              <option key={option.id} value={option.id}>
                {option.text}
              </option>
            ))}
          </select>
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
