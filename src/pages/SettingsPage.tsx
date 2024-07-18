import styled from "styled-components";
import { useGetCachedUser } from "../features/authentication/useGetCachedUser";
import Button from "../ui/Button";
import { useState } from "react";
import { useSetSettings } from "../features/settings/useSetSettings";
import { IoCheckmark } from "react-icons/io5";
import { device } from "../styles/breakpoints";

const PageContainer = styled.div`
  grid-column: 1 / -1;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 0;
  height: calc(100dvh - 8rem);
  overflow-y: auto;
`;

const UserInfo = styled.div`
  font-size: 3rem;
  color: var(--color-gray-500);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  margin-bottom: 5rem;
`;

const UserImg = styled.img`
  width: 10%;
  border-radius: var(--border-radius-full);

  @media ${device.smallPhone} {
    width: 30%;
  }
`;

const Settings = styled.form`
  margin: 0 auto;
  display: flex;
  justify-content: space-around;

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;

  @media ${device.phone} {
    width: 50%;
  }

  @media ${device.smallPhone} {
    width: 70%;
  }
`;

const CheckboxContainer = styled.label`
  width: 50%;
  position: relative;
  cursor: pointer;
  font-size: 2rem;
  color: var(--color-gray-800);

  &:hover span {
    background-color: var(--color-lime-200);
  }

  & input:checked ~ span {
    background-color: var(--color-lime-500);
  }
`;

const RealCheckbox = styled.input.attrs({ type: "checkbox" })`
  visibility: hidden;
  margin-left: 1rem;
  height: 2.4rem;
  width: 2.4rem;
  position: absolute;
  top: 0.4rem;
  right: 0;
`;

const FakeCheckbox = styled.span`
  margin-left: 1rem;
  position: absolute;
  height: 2.4rem;
  width: 2.4rem;
  border: 2px solid var(--color-lime-500);
  border-radius: var(--border-radius-sm);
  top: 0.4rem;
  right: 0;

  & > * {
    stroke: var(--color-gray-0);
  }
`;

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [hideStatus, setHideStatus] = useState(false);

  const user = useGetCachedUser();
  const userData = user.user_metadata;

  const { setSettings } = useSetSettings();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSettings({
      id: user.id,
      dark_mode: darkMode,
      hide_visibility: hideStatus,
    });
  }

  return (
    <PageContainer>
      <UserInfo>
        <UserImg
          src={userData.profilePicture || "/default-profile-picture.svg"}
          alt={`Foto de perfil de ${userData.name}`}
        />
        <p>{userData.name}</p>
      </UserInfo>

      <Settings onSubmit={handleSubmit}>
        <CheckboxContainer htmlFor="light-dark-mode">
          <p style={{ display: "inline" }}>Tema escuro</p>
          <RealCheckbox
            type="checkbox"
            id="light-dark-mode"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <FakeCheckbox>
            <IoCheckmark />
          </FakeCheckbox>
        </CheckboxContainer>

        <CheckboxContainer htmlFor="hide-online-status">
          Ocultar online
          <RealCheckbox
            type="checkbox"
            id="hide-online-status"
            checked={hideStatus}
            onChange={() => setHideStatus(!hideStatus)}
          />
          <FakeCheckbox>
            <IoCheckmark />
          </FakeCheckbox>
        </CheckboxContainer>

        <Button type="submit" style={{ margin: "3rem auto 0" }}>
          Salvar
        </Button>
      </Settings>
    </PageContainer>
  );
}
