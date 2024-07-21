import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../../../store";
import App from "../../../App";

test("user creates a new post", async () => {
  const user = userEvent.setup();

  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  //log in the app
  const email = await screen.findByRole("textbox");
  const password = screen.getByPlaceholderText(/senha/i);
  const button = screen.getByText("Entrar");

  await user.clear(email);
  await user.type(email, "matheus@gmail.com");

  await user.clear(password);
  await user.type(password, "matheus1234");

  await user.click(button);

  await waitFor(
    async () => {
      // gets element of main page
      const header = await screen.findByRole("banner");
      expect(header).toBeInTheDocument();
    },
    { timeout: 5000 }
  );

  //open create post modal
  const openModal = screen.getByText("Faça uma nova publicação");
  await user.click(openModal);

  //create a post
  const newPostTextInput = screen.getByTestId("text-input");
  const postButton = screen.getByText("Publicar");

  await user.clear(newPostTextInput);
  await user.click(postButton);

  waitFor(() => expect(postButton).not.toBeInTheDocument());
});
