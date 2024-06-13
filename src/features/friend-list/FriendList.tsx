import styled from "styled-components";
import FriendCard from "../../ui/FriendCard";

const StyledFriendList = styled.aside`
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default function FriendList() {
  return (
    <StyledFriendList>
      <FriendCard />
      <FriendCard />
      <FriendCard />
      <FriendCard />
      <FriendCard />
      <FriendCard />
    </StyledFriendList>
  );
}
