import styled, { css } from "styled-components";

type VariationType = "regular" | "modal";

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
  `,
};

const StyledForm = styled.form<FormType>`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  ${(props) => variations[props.variation ?? "regular"]}
`;

export default StyledForm;
