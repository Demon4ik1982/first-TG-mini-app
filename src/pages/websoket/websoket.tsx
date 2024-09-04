import { useEffect, useState } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { Button } from "../../ui/Button/Button";
import "./websoket.css";

export const Websoket = () => {
  const socketUrl = "wss://echo.websocket.org";
  const [messageHistory, setMessageHistory] = useState<MessageEvent<string>[]>(
    []
  );
  const [chat, setChat] = useState("");

  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl, {
    onOpen: () => sendMessage("Connected to the echo server"),
    onMessage(event) {
      const messageText: string = event.data;
      if (messageText.includes("You")) {
        const text = messageText.replace("You:", "");
        sendMessage(`Echoed back: ${text.trim()}`);
      }
    },
  });

  useEffect(() => {
    if (lastMessage !== null) {
      setMessageHistory((prev) => prev.concat(lastMessage));
    }
  }, [lastMessage]);

  const handleClickSendMessage = () => {
    if (chat.trim() === "") return;
    sendMessage(`You: ${chat}`);
    setChat("");
  };

  return (
    <div className="websoket">
      <div className="websoket__wrapper">
        <Button
          onClick={handleClickSendMessage}
          disabled={readyState !== ReadyState.OPEN}
        >
          Send
        </Button>
        <input
          className="websoket__input"
          type="text"
          value={chat}
          onChange={(event) => setChat(event.target.value)}
        />
      </div>
      {messageHistory.length === 0 ? null : (
        <ul className="websoket__list">
          {messageHistory.map((message, id) =>
            message.data.includes("Request") ? null : (
              <li className="websoket__item" key={id} id="chatBox">
                {message.data}
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
};
