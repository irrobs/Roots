import { IoEllipse } from "react-icons/io5";
import styled from "styled-components";
import { useGetCachedUser } from "../features/authentication/useGetCachedUser";

type UserInfoProps = {
  onlineStatus: "offline" | "online";
};

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
    background-color: var(--color-gray-0);
    border-radius: var(--border-radius-full);
    width: 6.4rem;
    height: 6.4rem;
  }
`;

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const UserStatus = styled.span<UserInfoProps>`
  font-weight: lighter;
  font-size: 1.6rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  line-height: 1;

  & span {
    height: 1.6rem;
    color: ${(props) =>
      props.onlineStatus === "offline"
        ? "var(--color-gray-200)"
        : "var(--color-green-600)"};
  }

  & p {
    text-transform: capitalize;
  }
`;

export default function UserCard({
  onSetIsHovered,
}: {
  onSetIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const user = useGetCachedUser();
  const userData = user.user_metadata;

  return (
    <StyledUserCard
      onMouseEnter={() => onSetIsHovered(true)}
      onMouseLeave={() => onSetIsHovered(false)}
    >
      <UserInfoContainer>
        <p>{userData.name}</p>
        <UserStatus onlineStatus={userData.status}>
          <p>{userData.status}</p>
          <span>
            <IoEllipse />
          </span>
        </UserStatus>
      </UserInfoContainer>

      <img
        src={
          userData.profilePicture
            ? userData.profilePicture
            : "/public/default-profile-picture.svg"
        }
        alt="Foto de perfil"
      />
    </StyledUserCard>
  );
}
