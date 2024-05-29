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

const options = [
  { value: 1, text: "A - Z" },
  { value: 2, text: "Z - A" },
];

export default function Timeline() {
  return (
    <StyledTimeline>
      <CreatePost />
      <Select options={options} type="green" />
      <Posts />
    </StyledTimeline>
  );
}
