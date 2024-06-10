import React from "react";
import { render } from "@testing-library/react";
import FlexBetween from "../FlexBetween";

// Importing jest-dom to enable its matchers
import "@testing-library/jest-dom";

test("renders FlexBetween component with correct styles", () => {
  const { container } = render(<FlexBetween />);
  
  // Ensure the component renders
  expect(container.firstChild).toBeTruthy();

  // Ensure the component has correct styles
  expect(container.firstChild).toHaveStyle("display: flex");
  expect(container.firstChild).toHaveStyle("justify-content: space-between");
  expect(container.firstChild).toHaveStyle("align-items: center");
});
