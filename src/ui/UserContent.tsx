import styled from "styled-components";
import Posts from "./Posts";
import Select from "./Select";

const StyledUserContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function UserContent() {
  return (
    <StyledUserContent>
      <Select>
        <option value="1">A - Z</option>
        <option value="2">Z - A</option>
      </Select>
      <Posts />
    </StyledUserContent>
  );
}
