import styled, { css } from "styled-components";
import { device } from "../styles/breakpoints";

type VariationType = "regular" | "modal" | "post";

type FormType = {
  variation?: VariationType;
};

const variations = {
  regular: css`
    margin-top: 3rem;
    width: 100%;
  `,

  modal: css`
    width: 20vw;

    @media ${device.laptop} {
      width: 40vw;
    }
  `,

  post: css`
    width: 30vw;

    @media ${device.laptop} {
      width: 50vw;
    }
  `,
};

const StyledForm = styled.form<FormType>`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media ${device.laptop} {
    gap: 2rem;
  }

  ${(props) => variations[props.variation ?? "regular"]}
`;

export default StyledForm;
