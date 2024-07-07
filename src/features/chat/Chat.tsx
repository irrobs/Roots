import styled from "styled-components";
import Button from "../../ui/Button";
import {
  IoCloseOutline,
  IoRemoveOutline,
  IoSendOutline,
} from "react-icons/io5";
import Message from "./Message";

const StyledChat = styled.div`
  position: absolute;
  bottom: 0;
  right: 15vw;
  height: 50rem;
  max-width: 40rem;
  background-color: var(--color-gray-0);
  box-shadow: var(--shadow-md);
  border-top-left-radius: var(--border-radius-md);
  border-top-right-radius: var(--border-radius-md);
  display: grid;
  grid-template-rows: 12% 1fr 8%;
`;

const FriendInfo = styled.div`
  background-color: var(--color-lime-500);
  width: 100%;
  color: var(--color-gray-0);
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-top-left-radius: var(--border-radius-md);
  border-top-right-radius: var(--border-radius-md);
`;

const Buttons = styled.div`
  display: flex;
  margin-left: auto;

  & > * {
    color: var(--color-lime-200);

    &:hover {
      color: var(--color-lime-700);
    }
  }
`;

const FriendImg = styled.img`
  background-color: var(--color-gray-0);
  border-radius: var(--border-radius-full);
  width: 10%;
`;

const MessagesContainer = styled.div`
  padding: 1rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: #f7fee7;
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  border-top: 1px solid var(--color-gray-200);
  padding: 1rem;
`;

const MessageInput = styled.input`
  width: 90%;
  border: none;
`;

const MessageButton = styled(Button)`
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
`;

export default function Chat() {
  return (
    <StyledChat>
      <FriendInfo>
        <FriendImg
          src="/default-profile-picture.svg"
          alt="Foto de perfil de ..."
        />
        <span>nome</span>

        <Buttons>
          <Button variation="tertiary" size="small">
            <IoRemoveOutline />
          </Button>
          <Button variation="tertiary" size="small">
            <IoCloseOutline />
          </Button>
        </Buttons>
      </FriendInfo>

      <MessagesContainer>
        <Message number={1} />
        <Message number={2} />
        <Message number={3} />
        <Message number={4} />
        <Message number={5} />
        <Message number={6} />
        <Message number={7} />
        <Message number={8} />
      </MessagesContainer>

      <InputContainer>
        <MessageInput placeholder="Envie uma mensagem" />
        <MessageButton variation="tertiary" size="small">
          <IoSendOutline />
        </MessageButton>
      </InputContainer>
    </StyledChat>
  );
}
