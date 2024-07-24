import React, { useRef, useState } from "react";

interface Props {
  onSendMessage: (message: string) => void;
  placeholder?: string;
  disableCorrections?: boolean;
  accept?: string;
}

export const TextMessageBoxFile = ({
  onSendMessage,
  placeholder,
  disableCorrections = false,
  accept,
}: Props) => {
  const [message, setMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const inputFileRef = useRef<HTMLInputElement>(null);

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
      <div className="mr-3">
        <button
          type="button"
          onClick={() => inputFileRef.current?.click()}
          className="flex items-center justify-center text-gray-400 hover:text-gray-600"
        >
          <i className="fa-solid fa-paperclip text-xl"></i>
        </button>
        <input
          type="file"
          accept={accept}
          ref={inputFileRef}
          className="hidden"
          onChange={(event) => setSelectedFile(event.target.files?.[0] || null)}
        />
      </div>

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
        <button className="btn-primary" disabled={!selectedFile}>
          {!selectedFile ? (
            <span className="mr-2">Send</span>
          ) : (
            <span className="mr-2">
              {selectedFile.name.substring(0, 10) + "..."}
            </span>
          )}

          <i className="fa-regular fa-paper-plane"></i>
        </button>
      </div>
    </form>
  );
};
