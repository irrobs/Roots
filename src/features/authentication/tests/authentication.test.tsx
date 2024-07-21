import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Provider } from "react-redux";
import { store } from "../../../store";
import App from "../../../App";

test("User puts right credentials and logs into app", async () => {
  const user = userEvent.setup();

  // render login page
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  // get elements that will be used
  const email = await screen.findByRole("textbox");
  const password = screen.getByPlaceholderText(/senha/i);
  const button = screen.getByText("Entrar");

  // put user info
  await user.clear(email);
  await user.type(email, "matheus@gmail.com");

  await user.clear(password);
  await user.type(password, "matheus1234");

  // try to log in
  await user.click(button);

  await waitFor(
    async () => {
      // gets element of main page
      const header = await screen.findByRole("banner");
      expect(header).toBeInTheDocument();
    },
    { timeout: 5000 }
  );

  // log out of app
  const logOutButton = await screen.findByText("Desconectar");
  await user.click(logOutButton);

  // wait for the login form to reappear
  await waitFor(
    async () => {
      const logInForm = await screen.findByRole("form");

      expect(logInForm).toBeInTheDocument();
    },
    { timeout: 5000 }
  );
});
