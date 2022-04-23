import { render, screen } from "@testing-library/react";
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
});
