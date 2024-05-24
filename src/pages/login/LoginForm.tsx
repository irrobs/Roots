import { IoEyeOutline } from "react-icons/io5";
import styled from "styled-components";
import logo from "../../../public/logo.png";

const StyledContainer = styled.div``;

export default function LoginForm() {
  return (
    <div>
      <div>
        <div>
          <img src={logo} alt="Desenho de uma árvore" />
          <h1>Roots</h1>
        </div>

        <form action="get">
          <input type="email" placeholder="Digite seu email" />

          <div>
            <input type="password" placeholder="Digite sua senha" />
            <IoEyeOutline />
          </div>

          <div>
            <input type="checkbox" id="checkbox-remember" />
            <label htmlFor="checkbox-remember">Lembre de mim</label>
          </div>

          <button>Entrar</button>
        </form>
      </div>

      <div>
        <button>Esqueceu a senha?</button>
        <button>Cadastre-se</button>
      </div>
    </div>
  );
}
