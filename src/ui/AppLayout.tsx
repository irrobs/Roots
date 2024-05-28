import styled from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const StyledAppLayout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 20vw 1fr;
  grid-template-rows: auto 1fr;
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
    </StyledAppLayout>
  );
}
