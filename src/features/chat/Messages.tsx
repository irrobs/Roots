import { useEffect, useState, useRef } from "react";
import { useGetCachedUser } from "../authentication/useGetCachedUser";
import { useSendMessage } from "./useSendMessage";
import { useGetMessages } from "./useGetMessages";
import styled from "styled-components";
import Button from "../../ui/Button";
import Message from "./Message";
import { IoSendOutline } from "react-icons/io5";
import supabase from "../../services/supabase";
import { MessageRenderType } from "../../types";

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
`;

const MessageInput = styled.input`
  width: 90%;
  padding: 1rem;
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
  const [chatMessages, setChatMessages] = useState<MessageRenderType[] | []>(
    []
  );
  const { messages: initialMessages = [] } = useGetMessages(chatId);
  const loggedUser = useGetCachedUser();
  const { sendMessage, isPending: isPendingSendMessage } = useSendMessage();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Set initial messages
  useEffect(() => {
    setChatMessages(initialMessages);
  }, [initialMessages]);

  // Scroll to bottom whenever chatMessages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatMessages]);

  // Set up realtime subscription
  useEffect(() => {
    const channel = supabase
      .channel(`chat-${chatId}`)
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "messages" },
        (payload) => {
          setChatMessages((prevMessages) => {
            if (
              !prevMessages.some((message) => message.id === payload.new.id)
            ) {
              return [...prevMessages, payload.new as MessageRenderType];
            }
            return prevMessages;
          });
        }
      )
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  }, [chatId]);

  function handleSubmitMessage(event: React.FormEvent) {
    event.preventDefault();
    if (message === "") return;
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
            {chatMessages.map((message) => (
              <Message
                side={message.sender_id === loggedUser.id ? "right" : "left"}
                content={message.content}
                key={message.id}
              />
            ))}
            <div ref={messagesEndRef} />
          </MessagesContainer>

          <form onSubmit={handleSubmitMessage}>
            <InputContainer>
              <MessageInput
                placeholder="Envie uma mensagem"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={isPendingSendMessage}
              />
              <MessageButton
                type="submit"
                variation="tertiary"
                size="small"
                disabled={isPendingSendMessage}
              >
                <IoSendOutline />
              </MessageButton>
            </InputContainer>
          </form>
        </>
      )}
    </>
  );
}
