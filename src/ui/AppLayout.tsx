import styled from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Chat from "../features/chat/Chat";

const StyledAppLayout = styled.div`
  display: grid;
  position: relative;

  grid-template-columns: 15vw 1fr;
  grid-template-rows: 8rem 1fr;
`;

const Main = styled.main`
  display: grid;

  grid-template-columns: 1fr 15vw;
`;

export default function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />

      <Main>
        <Outlet />
      </Main>
      <Chat />
    </StyledAppLayout>
  );
}
