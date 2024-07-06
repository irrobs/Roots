import styled from "styled-components";
import Select from "./Select";
import UserPosts from "./UserPosts";

const StyledUserContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function LoggedUserContent() {
  return (
    <StyledUserContent>
      <Select>
        <option value="1">A - Z</option>
        <option value="2">Z - A</option>
      </Select>
      <UserPosts />
    </StyledUserContent>
  );
}
