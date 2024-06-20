import styled from "styled-components";
import Posts from "../../ui/Posts";
import Select from "../../ui/Select";
import CreatePost from "../../ui/CreatePost";

const StyledTimeline = styled.main`
  padding-top: 2rem;
  padding-right: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Timeline() {
  return (
    <StyledTimeline>
      <CreatePost />
      <Select />
      <Posts />
    </StyledTimeline>
  );
}
