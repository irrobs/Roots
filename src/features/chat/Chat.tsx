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
import { useGetUserWithId } from "../user/useGetUserWithId";
import { useQueryClient } from "@tanstack/react-query";
import { useGetChats } from "./useGetChats";

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
  const [message, setMessage] = useState("");
  const queryClient = useQueryClient();
  const loggedUser = useGetCachedUser();
  const friendId =
    chat.user1_id === loggedUser.id ? chat.user2_id : chat.user1_id;
  const { user: friend, isPending } = useGetUserWithId(friendId);
  const { chats } = useGetChats();

  if (isPending) return <p>Loading...</p>;

  const friendData = friend!.user_metadata;

  function handleCloseChat() {
    const newChats = chats!.filter((savedChat) => savedChat.id !== chat.id);
    queryClient.setQueryData(["chats"], newChats);
  }

  function handleSubmitMessage() {
    console.log(message);
    setMessage("");
  }

  return (
    <StyledChat minimized={minimized}>
      <FriendInfo>
        <FriendImg
          src={
            friendData.profilePicture
              ? friendData.profilePicture
              : "/default-profile-picture.svg"
          }
          alt={`Foto de perfil de ${friendData.name}`}
        />
        <span>{friendData.name}</span>

        <Buttons>
          <Button
            variation="tertiary"
            size="small"
            onClick={() => setMinimized(!minimized)}
          >
            <IoRemoveOutline />
          </Button>
          <Button variation="tertiary" size="small" onClick={handleCloseChat}>
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
            <MessageInput
              placeholder="Envie uma mensagem"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <MessageButton
              variation="tertiary"
              size="small"
              onClick={handleSubmitMessage}
            >
              <IoSendOutline />
            </MessageButton>
          </InputContainer>
        </>
      )}
    </StyledChat>
  );
}
