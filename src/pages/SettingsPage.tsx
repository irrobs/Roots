import styled from "styled-components";
import { useGetCachedUser } from "../features/authentication/useGetCachedUser";
import Button from "../ui/Button";
import Select from "../ui/Select";

const PageContainer = styled.div`
  grid-column: 1 / -1;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 0;
  height: calc(100vh - 8rem);
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
`;

const Settings = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 5rem;
  height: 50%;
`;

const CheckboxContainer = styled.label`
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
`;

const FakeCheckbox = styled.span`
  margin-left: 1rem;
  position: absolute;
  height: 2.4rem;
  width: 2.4rem;
  border: 2px solid var(--color-lime-500);
  border-radius: var(--border-radius-sm);
  top: 0.4rem;

  &::after {
    content: url("/checkmark.svg");
  }
`;

export default function SettingsPage() {
  const user = useGetCachedUser();
  const userData = user.user_metadata;
  return (
    <PageContainer>
      <UserInfo>
        <UserImg
          src={userData.profilePicture || "/default-profile-picture.svg"}
          alt={`Foto de perfil de ${userData.name}`}
        />
        <p>{userData.name}</p>
      </UserInfo>
      <Settings>
        <CheckboxContainer htmlFor="light-dark-mode">
          <p style={{ display: "inline" }}>Tema escuro</p>
          <RealCheckbox type="checkbox" id="light-dark-mode" />
          <FakeCheckbox></FakeCheckbox>
        </CheckboxContainer>

        <div>
          <span>Linguagem:</span>
          <Select id="language-select" variation="language">
            <option value="1">Português</option>
            <option value="2">Inglês</option>
            <option value="3">Espanhol</option>
          </Select>
        </div>

        <CheckboxContainer htmlFor="hide-online-status">
          Ocultar online
          <RealCheckbox type="checkbox" id="hide-online-status" />
          <FakeCheckbox></FakeCheckbox>
        </CheckboxContainer>
      </Settings>
      <Button size="medium" style={{ margin: "auto auto 0" }}>
        Salvar
      </Button>
    </PageContainer>
  );
}
