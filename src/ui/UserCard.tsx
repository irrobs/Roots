import { IoEllipse } from "react-icons/io5";
import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";

const StyledUserCard = styled.button`
  background-color: inherit;
  border: none;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 1rem;
  color: var(--color-gray-0);
  font-size: 2rem;
  transition: all 0.3s;

  & img {
    border-radius: var(--border-radius-full);
    width: 6.4rem;
    height: 6.4rem;
  }
`;

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserStatus = styled.span`
  font-weight: lighter;
  font-size: 1.6rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin-left: auto;
  line-height: 1;

  & span {
    color: var(--color-red-600);
  }
`;

export default function UserCard({ onSetIsHovered }) {
  const { user } = useUser();

  return (
    <StyledUserCard
      onMouseEnter={() => onSetIsHovered(true)}
      onMouseLeave={() => onSetIsHovered(false)}
    >
      <UserInfoContainer>
        <p>{user?.email}</p>
        <UserStatus>
          <span>
            <IoEllipse />
          </span>
          ocupado
        </UserStatus>
      </UserInfoContainer>

      <img src="/profile-picture.png" alt="User profile photo" />
    </StyledUserCard>
  );
}
