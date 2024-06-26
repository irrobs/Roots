import styled from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 15vw 1fr;
  grid-template-rows: 10rem 1fr;
`;

const Main = styled.main`
  display: grid;
  height: 100vh;
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
