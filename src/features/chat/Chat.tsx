import styled from "styled-components";
import Button from "../../ui/Button";
import { IoCloseOutline, IoRemoveOutline } from "react-icons/io5";

import { ChatRenderType } from "../../types";
import { useGetCachedUser } from "../authentication/useGetCachedUser";
import { useState } from "react";
import { useGetUserWithId } from "../user/useGetUserWithId";
import { useQueryClient } from "@tanstack/react-query";
import { useGetChats } from "./useGetChats";
import Messages from "./Messages";
import { device } from "../../styles/breakpoints";

const StyledChat = styled.div<{ minimized: boolean }>`
  width: 40rem;
  background-color: var(--color-gray-0);
  box-shadow: var(--shadow-md);
  border-top-left-radius: var(--border-radius-md);
  border-top-right-radius: var(--border-radius-md);
  display: grid;
  grid-template-rows: ${({ minimized }) => (minimized ? "100%" : "12% 1fr 8%")};
  height: ${({ minimized }) => (minimized ? "min-content" : "50rem")};
  margin-top: ${({ minimized }) => (minimized ? "auto" : "0")};

  @media ${device.smallLaptop} {
    width: 35rem;
  }
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

export default function Chat({ chat }: { chat: ChatRenderType }) {
  const [minimized, setMinimized] = useState(false);

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

      <Messages minimized={minimized} chatId={chat.id} />
    </StyledChat>
  );
}
