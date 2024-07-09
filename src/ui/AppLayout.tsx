import styled from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useGetChats } from "../features/chat/useGetChats";
import ChatContainer from "../features/chat/ChatContainer";

const StyledAppLayout = styled.div`
  display: grid;

  grid-template-columns: 15vw 1fr;
  grid-template-rows: 8rem 1fr;
`;

const Main = styled.main`
  display: grid;

  grid-template-columns: 1fr 15vw;
`;

export default function AppLayout() {
  const { chats } = useGetChats();
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />

      <Main>
        <Outlet />
      </Main>
      {chats === undefined ? null : <ChatContainer chats={chats} />}
    </StyledAppLayout>
  );
}
