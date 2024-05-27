import styled from "styled-components";
import Header from "../../components/common/Header";
import Sidebar from "../../components/common/Sidebar";
import Timeline from "../../features/timeline/Timeline";

const StyledPage = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-columns: 20vw 1fr 15vw;
  grid-template-rows: auto 1fr;
`;

export default function MainPage() {
  return (
    <StyledPage>
      <Header />
      <Sidebar />
      <Timeline />
    </StyledPage>
  );
}
