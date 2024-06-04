import { useQuery } from "@tanstack/react-query";
import { IoEllipse } from "react-icons/io5";
import styled, { css } from "styled-components";
import { useUser } from "../features/authentication/useUser";

const UserCard = styled.button<{ type: string }>`
  background-color: transparent;
  border: none;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 1rem;
  border-radius: var(--border-radius-md);
  color: var(--color-gray-0);
  font-size: 2rem;
  transition: all 0.3s;

  ${(props) =>
    props.type === "friend" &&
    css`
      padding: 0.5rem;
      font-size: 1.6rem;
      color: var(--color-gray-500);

      &:hover {
        background-color: var(--color-lime-500);
      }
    `}

  & img {
    border-radius: var(--border-radius-full);
    width: 6.4rem;
    height: 6.4rem;

    ${(props) =>
      props.type === "friend" &&
      css`
        width: 4.8rem;
        height: 4.8rem;
        grid-column: 1;
        grid-row: 1;
        transition: all 0.3s;
        background-color: var(--color-lime-500);
      `}
  }
`;

const UserInfoContainer = styled.div<{ type: string }>`
  display: flex;
  flex-direction: column;

  ${(props) =>
    props.type === "friend" &&
    css`
      align-items: flex-start;
    `}
`;

const UserStatus = styled.span<{ type: string }>`
  font-weight: lighter;
  font-size: 1.6rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin-left: auto;
  line-height: 1;

  ${(props) =>
    props.type === "friend" &&
    css`
      font-size: 1.2rem;
      margin-left: 0;
    `}

  & span {
    color: var(--color-red-600);
  }
`;

export default function User({ userType }) {
  const { user, isPending, isAuthenticated } = useUser();

  return (
    <UserCard type={userType}>
      <UserInfoContainer type={userType}>
        <p>{user?.email}</p>
        <UserStatus type={userType}>
          <span>
            <IoEllipse />
          </span>{" "}
          ocupado
        </UserStatus>
      </UserInfoContainer>

      <img src="/profile-picture.png" alt="User profile photo" />
    </UserCard>
  );
}
