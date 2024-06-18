import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../../../../App";
import { Provider } from "react-redux";
import { store } from "../../../../store";

test("Reset email is sent to user", async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  // Open modal
  const openModal = await screen.findByText("Esqueceu sua senha?");
  await userEvent.click(openModal);

  // Send email
  const email = screen.getByPlaceholderText(/Digite seu email/i);
  const sendButton = screen.getByText("Enviar");
  await userEvent.clear(email);
  await userEvent.type(email, "test@test.com");

  await userEvent.click(sendButton);

  // Assertion: Ensure modal is closed
  expect(screen.queryByRole("dialog")).toBeNull();
});
