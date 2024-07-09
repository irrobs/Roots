import { ChatRenderType } from "../../types";
import styled from "styled-components";
import Chat from "./Chat";

const StyledChatContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 17vw;
  display: flex;
  gap: 2rem;
`;

export default function ChatContainer({ chats }: { chats: ChatRenderType[] }) {
  return (
    <StyledChatContainer>
      {chats.map((chat) => (
        <Chat chat={chat} key={chat.id} />
      ))}
    </StyledChatContainer>
  );
}
