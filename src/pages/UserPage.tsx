import styled from "styled-components";
import UserContent from "../ui/UserContent";
import UserBio from "../ui/UserBio";

import { useNavigate, useParams } from "react-router-dom";
import { useGetCachedUser } from "../features/authentication/useGetCachedUser";
import { useEffect } from "react";
import { device } from "../styles/breakpoints";

const PageContainer = styled.div`
  grid-column: 1 / -1;

  padding: 2rem 10rem;
  height: calc(100vh - 8rem);
  overflow-y: scroll;

  @media ${device.smallTablet} {
    padding: 2rem;
  }
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
