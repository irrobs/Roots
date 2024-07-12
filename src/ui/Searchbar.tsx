import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import styled from "styled-components";
import { useGetUsers } from "../features/user/useGetUsers";
import { Link } from "react-router-dom";

const StyledSearchbar = styled.div`
  position: relative;
  width: 100%;
  color: var(--color-gray-600);
`;

const InputSearch = styled.input.attrs({ type: "text" })`
  width: 100%;
  height: 3.6rem;
  padding: 2rem;
  border-radius: var(--border-radius-full);
  border: none;
  outline-color: var(--color-lime-700);
  color: var(--color-gray-500);
  background-color: var(--color-gray-0);
`;

const Icon = styled.span`
  display: inline-block;
  position: absolute;
  width: 2.4rem;
  height: 2.4rem;
  top: 50%;
  right: 1rem;
  transform: translateY(-40%);
  color: var(--color-gray-500);
`;

const SearchedUsersList = styled.ul`
  max-height: 80rem;
  position: absolute;
  background-color: var(--color-gray-0);
  width: 100%;
  margin-top: 0.5rem;
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);

  flex-direction: column;
  padding: 1rem 0 1rem 1rem;

  overflow-y: auto;
  font-size: 2rem;

  & > *:not(:last-child) {
    border-bottom: 1px solid var(--color-gray-200);
  }
`;

const SearchedUserLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--color-gray-500);
  transition: all 0.3s linear;
  padding: 1rem;
  border-top-left-radius: var(--border-radius-md);
  border-bottom-left-radius: var(--border-radius-md);

  &:hover {
    background-color: var(--color-lime-500);
    padding: 2rem;
    color: var(--color-gray-0);
  }
`;

const SearchedUserImg = styled.img`
  border-radius: var(--border-radius-full);
  width: 5%;
  background-color: var(--color-gray-0);
`;

export default function Searchbar() {
  const { users } = useGetUsers();

  const [searchUser, setSearchUser] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const filteredUsers = users
    ? users.filter((user) =>
        user.user_metadata.name.toLowerCase().includes(searchUser.toLowerCase())
      )
    : [];

  return (
    <StyledSearchbar>
      <InputSearch
        placeholder="Pesquisar..."
        value={searchUser}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchUser(e.target.value)
        }
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />

      <Icon>
        <IoSearchOutline />
      </Icon>

      {(isFocused || isHovered) && filteredUsers.length > 0 && (
        <SearchedUsersList
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {filteredUsers.map((user) => (
            <li key={user.id}>
              <SearchedUserLink to={`/user/${user.id}`}>
                <SearchedUserImg
                  src={
                    user.user_metadata.profilePicture
                      ? user.user_metadata.profilePicture
                      : "/default-profile-picture.svg"
                  }
                  alt="Foto de perfil"
                />{" "}
                <span>{user.user_metadata.name}</span>
              </SearchedUserLink>
            </li>
          ))}
        </SearchedUsersList>
      )}
    </StyledSearchbar>
  );
}
