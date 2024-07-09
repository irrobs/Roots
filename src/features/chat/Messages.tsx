import { useState } from "react";
import { useGetCachedUser } from "../authentication/useGetCachedUser";
import { useSendMessage } from "./useSendMessage";
import { useGetMessages } from "./useGetMessages";
import styled from "styled-components";
import Button from "../../ui/Button";
import Message from "./Message";
import { IoSendOutline } from "react-icons/io5";

const MessagesContainer = styled.div`
  padding: 1rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
  background-color: #f7fee7;
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  border-top: 1px solid var(--color-gray-200);
  padding: 1rem;
`;

const MessageInput = styled.input`
  width: 90%;
  border: none;
`;

const MessageButton = styled(Button)`
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
`;

export default function Messages({
  minimized,
  chatId,
}: {
  minimized: boolean;
  chatId: string;
}) {
  const [message, setMessage] = useState("");
  const loggedUser = useGetCachedUser();
  const { sendMessage, isPending: isPendingSendMessage } = useSendMessage();
  const { messages = [] } = useGetMessages(chatId);

  function handleSubmitMessage() {
    sendMessage({
      content: message,
      sender_id: loggedUser.id,
      conversation_id: chatId,
    });
    setMessage("");
  }
  return (
    <>
      {minimized ? null : (
        <>
          <MessagesContainer>
            {messages.map((message) => (
              <Message
                side={message.sender_id === loggedUser.id ? "right" : "left"}
                content={message.content}
                key={message.id}
              />
            ))}
          </MessagesContainer>

          <InputContainer>
            <MessageInput
              placeholder="Envie uma mensagem"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={isPendingSendMessage}
            />
            <MessageButton
              variation="tertiary"
              size="small"
              onClick={handleSubmitMessage}
              disabled={isPendingSendMessage}
            >
              <IoSendOutline />
            </MessageButton>
          </InputContainer>
        </>
      )}
    </>
  );
}
