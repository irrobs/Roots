import styled from "styled-components";
import SidebarNavigation from "./SidebarNavigation";

const StyledSidebar = styled.aside`
  background-color: var(--color-lime-200);
  padding: 4rem 3rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Copyright = styled.span`
  text-align: center;
  color: var(--color-gray-500);
`;

export default function Sidebar() {
  return (
    <StyledSidebar>
      <SidebarNavigation />

      <Copyright>@2024 copyright - fasdfsafd</Copyright>
    </StyledSidebar>
  );
}
