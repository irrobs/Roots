import { ChatRenderType } from "../../types";
import styled from "styled-components";
import Chat from "./Chat";
import { device } from "../../styles/breakpoints";

const StyledChatContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 5vw;

  display: flex;
  gap: 2rem;

  @media ${device.smallTablet} {
    bottom: 5.5rem;
  }
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
