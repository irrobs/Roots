import styled from "styled-components";
import Posts from "../../ui/Posts";

import CreatePost from "../../ui/CreatePost";
import SortBy from "../../ui/SortBy";
import { device } from "../../styles/breakpoints";

const StyledTimeline = styled.div`
  padding-top: 2rem;
  padding-right: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100dvh - 8rem);
  overflow-y: scroll;

  @media ${device.phone} {
    padding: 2rem 2rem 0;
  }
`;

export default function Timeline() {
  return (
    <StyledTimeline>
      <CreatePost />
      <SortBy />
      <Posts />
    </StyledTimeline>
  );
}
