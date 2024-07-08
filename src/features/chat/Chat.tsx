import styled from "styled-components";
import Button from "../../ui/Button";
import {
  IoCloseOutline,
  IoRemoveOutline,
  IoSendOutline,
} from "react-icons/io5";
import Message from "./Message";
import { ChatRenderType } from "../../types";
import { useGetCachedUser } from "../authentication/useGetCachedUser";
import { useState } from "react";

const StyledChat = styled.div<{ minimized: boolean }>`
  max-width: 40rem;
  background-color: var(--color-gray-0);
  box-shadow: var(--shadow-md);
  border-top-left-radius: var(--border-radius-md);
  border-top-right-radius: var(--border-radius-md);
  display: grid;
  grid-template-rows: ${({ minimized }) => (minimized ? "100%" : "12% 1fr 8%")};
  height: ${({ minimized }) => (minimized ? "min-content" : "50rem")};
  margin-top: ${({ minimized }) => (minimized ? "auto" : "0")};
`;

const FriendInfo = styled.div`
  background-color: var(--color-lime-500);
  width: 100%;
  color: var(--color-gray-0);
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-top-left-radius: var(--border-radius-md);
  border-top-right-radius: var(--border-radius-md);
`;

const Buttons = styled.div`
  display: flex;
  margin-left: auto;

  & > * {
    color: var(--color-lime-200);

    &:hover {
      color: var(--color-lime-700);
    }
  }
`;

const FriendImg = styled.img`
  background-color: var(--color-gray-0);
  border-radius: var(--border-radius-full);
  width: 10%;
`;

const MessagesContainer = styled.div`
  padding: 1rem;
  overflow-y: auto;
  flex-direction: column;
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

export default function Chat({ chat }: { chat: ChatRenderType }) {
  const [minimized, setMinimized] = useState(false);
  const user = useGetCachedUser();
  console.log(user);

  return (
    <StyledChat minimized={minimized}>
      <FriendInfo>
        <FriendImg
          src="/default-profile-picture.svg"
          alt="Foto de perfil de ..."
        />
        <span>{chat.id}</span>

        <Buttons>
          <Button
            variation="tertiary"
            size="small"
            onClick={() => setMinimized(!minimized)}
          >
            <IoRemoveOutline />
          </Button>
          <Button variation="tertiary" size="small">
            <IoCloseOutline />
          </Button>
        </Buttons>
      </FriendInfo>

      {!minimized && (
        <>
          <MessagesContainer>
            <Message number={1} />
            <Message number={2} />
            <Message number={3} />
            <Message number={4} />
            <Message number={5} />
            <Message number={6} />
            <Message number={7} />
            <Message number={8} />
          </MessagesContainer>

          <InputContainer>
            <MessageInput placeholder="Envie uma mensagem" />
            <MessageButton variation="tertiary" size="small">
              <IoSendOutline />
            </MessageButton>
          </InputContainer>
        </>
      )}
    </StyledChat>
  );
}
