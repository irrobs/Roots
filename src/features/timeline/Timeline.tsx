import styled from "styled-components";
import Posts from "../../ui/Posts";

import CreatePost from "../../ui/CreatePost";
import SortBy from "../../ui/SortBy";

const StyledTimeline = styled.div`
  padding-top: 2rem;
  padding-right: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 8rem);
  overflow-y: scroll;
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
