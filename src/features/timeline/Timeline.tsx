import styled from "styled-components";
import Posts from "../../ui/Posts";
import Select from "../../ui/Select";
import CreatePost from "../../ui/CreatePost";
import { useEffect } from "react";
import { useGetPosts } from "../posts/useGetPosts";

const StyledTimeline = styled.div`
  padding-top: 2rem;
  padding-right: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
`;

export default function Timeline() {
  const { getPosts, isPending } = useGetPosts();

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <StyledTimeline>
      <CreatePost />
      <Select>
        <option value="1">A - Z</option>
        <option value="2">Z - A</option>
      </Select>
      <Posts />
    </StyledTimeline>
  );
}
