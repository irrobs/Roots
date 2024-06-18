import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../../../../App";
import { Provider } from "react-redux";
import { store } from "../../../../store";

test("User puts right credentials and log into app", async () => {
  const user = userEvent.setup();

  //render login page
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  //get elements that will be used
  const email = await screen.findByRole("textbox");
  const password = screen.getByPlaceholderText(/senha/i);
  const button = screen.getByText("Entrar");

  //put user info
  await user.clear(email);
  await user.type(email, "teste@test.com");

  await user.clear(password);
  await user.type(password, "testtest");

  //try to log in
  await user.click(button);

  //gets element of main page
  const header = await screen.findByRole("banner");
  expect(header).toBeInTheDocument();
});
