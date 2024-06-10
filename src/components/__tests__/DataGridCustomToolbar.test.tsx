import React from "react";
import { render } from "@testing-library/react";
import DataGridCustomToolbar from "../DataGridCustomToolbar";

// Mocking GridToolbarContainer and its dependencies
jest.mock("@mui/x-data-grid", () => ({
  ...jest.requireActual("@mui/x-data-grid"),
  GridToolbarContainer: jest.fn(({ children }) => <div>{children}</div>),
  GridToolbarColumnsButton: jest.fn(() => <div>Columns Button</div>),
  GridToolbarDensitySelector: jest.fn(() => <div>Density Selector</div>),
  GridToolbarExport: jest.fn(() => <div>Export</div>),
}));

test("should call setSearchInput and setSearch on search button click", () => {
  const setSearchInput = jest.fn();
  const setSearch = jest.fn();

  const { getByLabelText, getByRole } = render(
    <DataGridCustomToolbar
      searchInput=""
      setSearchInput={setSearchInput}
      setSearch={setSearch}
    />
  );

  // Your test assertions...
});
