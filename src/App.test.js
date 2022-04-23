import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("GithubProfile", () => {
  it("should render the header", () => {
    render(<App />);
    const headerElement = screen.getByText(/HEADER/i);
    expect(headerElement).toBeInTheDocument();
  });

  it("should render the Github profile", () => {
    render(<App />);
    const gitHubProfileElement = screen.getByRole("heading", {
      name: "Github Profile",
    });
    expect(gitHubProfileElement).toBeInTheDocument();
  });

  it("should render the footer", () => {
    render(<App />);
    const footerElement = screen.getByText(/FOOTER/);
    expect(footerElement).toBeInTheDocument();
  });

  it("should render the github profile data after the search", async () => {
    render(<App />);
    const username = "felipetofoli";

    fireEvent.change(screen.getByPlaceholderText(/Type the user name/i), {
      target: { value: username },
    });
    fireEvent.click(screen.getByRole("button", { name: "Search" }));

    const usernameElement = await screen.findByRole("heading", {
      name: username,
    });
    expect(usernameElement).toBeInTheDocument();
  });
});
