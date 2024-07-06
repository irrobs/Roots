import styled from "styled-components";
import UserContent from "../ui/LoggedUserContent";
import UserBio from "../ui/UserBio";

import { useNavigate, useParams } from "react-router-dom";
import { useGetCachedUser } from "../features/authentication/useGetCachedUser";
import { useEffect } from "react";

const PageContainer = styled.div`
  grid-column: 1 / -1;
  width: 90%;
  margin: 2rem auto;
`;

export default function UserPage() {
  const { id } = useParams();
  const loggedUser = useGetCachedUser();
  const navigate = useNavigate();

  //redirect to logged user page in case id is equal to the id of logged user
  useEffect(() => {
    if (loggedUser.id === id) navigate("/user");
  }, [id, navigate, loggedUser.id]);

  return (
    <PageContainer>
      <UserBio />
      <UserContent />
    </PageContainer>
  );
}
