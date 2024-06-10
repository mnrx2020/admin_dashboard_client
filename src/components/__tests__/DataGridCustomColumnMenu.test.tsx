import React from 'react';
import { render } from '@testing-library/react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import CustomColumnMenu from '../DataGridCustomColumnMenu';

describe('CustomColumnMenu', () => {
  const column: GridColDef = {
    field: 'testColumn',
    headerName: 'Test Column',
  };

  const defaultProps = {
    hideMenu: jest.fn(),
    open: true,
    id: 'test-id',
    labelledby: 'test-labelledby',
  };

  it('should render without the sort item', () => {
    const { queryByText } = render(
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={[]}
          columns={[column]}
          {...defaultProps}
          // Ensure you're not passing unsupported props like `components` here
        />
      </div>
    );

    // Assert that the sort item is not present
    const sortItem = queryByText(/Sort/i);
    expect(sortItem).toBeNull();
  });
});
