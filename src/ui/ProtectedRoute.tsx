import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import { useNavigate } from "react-router-dom";
import { ReactNode, useEffect } from "react";
import Loading from "./Loading";

/* Doing authorization for authenticated users using protected route */

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface RouteProps {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: RouteProps) {
  const navigate = useNavigate();

  //get user data
  const { isAuthenticated, isPending } = useUser();

  //check if there is no user. If no user, navigate to login
  useEffect(
    function () {
      if (!isAuthenticated && !isPending) {
        navigate("/login");
      }
    },
    [navigate, isAuthenticated, isPending]
  );

  if (isPending)
    return (
      <FullPage>
        <Loading />
      </FullPage>
    );

  //if there is a user, go to app
  if (isAuthenticated) return children;
}
