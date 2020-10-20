import React from "react";
import { render } from "@testing-library/react";
import Posts from "./Posts";

test("renders learn react link", () => {
  const { getByText } = render(<Posts />);
  const linkElement = getByText(/Hello World/i);
  expect(linkElement).toBeInTheDocument();
});
