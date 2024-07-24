import { useState } from "react";
import {
  GptMessages,
  GptOrthographyMessage,
  MyMessage,
  TextMessageBox,
  TextMessageBoxFile,
  TextMessageBoxSelect,
  TypingLoader,
} from "../../components";
import { orthographyUseCase } from "../../../core/use-cases";

interface Message {
  text: string;
  isGpt: boolean;
  info?: {
    userScore: number;
    errors: string[];
    message: string;
  };
}

export const OrthographyPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  const handlePost = async (text: string) => {
    setIsLoading(true);
    setMessages((prev) => [...prev, { text, isGpt: false }]);
    const { ok, errors, message, userScore } = await orthographyUseCase(text);
    if (!ok) {
      setMessages((prev) => [...prev, { text: message, isGpt: false }]);
    } else {
      setMessages((prev) => [
        ...prev,
        {
          text: "no se puedo realizar la correción",
          isGpt: true,
          info: {
            errors,
            message,
            userScore,
          },
        },
      ]);
    }

    setIsLoading(false);
    //TODO mensaje isgpt en true
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2">
          {messages.map((message, index) =>
            message.isGpt ? (
              <GptOrthographyMessage
                key={index}
                message={message.info!.message}
                errors={message.info!.errors}
                userScore={message.info!.userScore}
              />
            ) : (
              <MyMessage key={index} text={message.text} />
            )
          )}

          {isLoading && (
            <div className="col-start-1 col-end-12 fade-in">
              <TypingLoader />
            </div>
          )}
        </div>
      </div>
      <TextMessageBox
        onSendMessage={handlePost}
        placeholder="Escribe un mensaje"
        disableCorrections
      />
      {/* <TextMessageBoxFile
        onSendMessage={handlePost}
        placeholder="Escribe un mensaje"
      /> */}
      {/* <TextMessageBoxSelect
        onSendMessage={console.log}
        options={[
          {
            id: "1",
            text: "hola",
          },
          {
            id: "2",
            text: "mundo",
          },
        ]}
      /> */}
    </div>
  );
};
