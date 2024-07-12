import styled from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useGetChats } from "../features/chat/useGetChats";
import ChatContainer from "../features/chat/ChatContainer";
import { useGetCachedUser } from "../features/authentication/useGetCachedUser";
import { useGetSettings } from "../features/settings/useGetSettings";

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
  const user = useGetCachedUser();
  const { settings, isPending } = useGetSettings(user.id);

  if (isPending) return <p>loading...</p>;

  if (settings.dark_mode) {
    document.documentElement.classList.add("dark-mode");
    document.documentElement.classList.remove("light-mode");
  } else {
    document.documentElement.classList.add("light-mode");
    document.documentElement.classList.remove("dark-mode");
  }

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
