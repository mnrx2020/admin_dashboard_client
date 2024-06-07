import React, { useState } from "react";
import { Box, useTheme, Theme } from "@mui/material";
import { DataGrid, GridColDef, GridToolbarProps } from "@mui/x-data-grid";
import { useGetTransactionsQuery } from "state/api";
import Header from "components/Header";
import DataGridCustomToolbar, { DataGridCustomToolbarProps } from "components/DataGridCustomToolbar";

interface Transaction {
  _id: string;
  userId: string;
  createdAt: string;
  products: any[];
  cost: number;
}

const Transactions: React.FC = () => {
  const theme: Theme = useTheme();

  // values to be sent to the backend
  const [sort, setSort] = useState({});
  const [search, setSearch] = useState("");
  const [paginationModel, setPaginationModel] = React.useState({
    pageSize: 20,
    page: 0,
  });

  const [searchInput, setSearchInput] = useState("");
  const { data, isLoading } = useGetTransactionsQuery({
    page: paginationModel.page,
    pageSize: paginationModel.pageSize,
    sort: JSON.stringify(sort),
    search,
  });

  const columns: GridColDef[] = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "userId",
      headerName: "User ID",
      flex: 1,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      flex: 1,
    },
    {
      field: "products",
      headerName: "# of Products",
      flex: 0.3,
      sortable: false,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => params.value.length,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 0.6,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="TRANSACTIONS" subtitle="Entire list of transactions" />
      <Box
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.default,
            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.default,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={(data && data.transactions) || []}
          columns={columns}
          rowCount={(data && data.total) || 0}
          pageSizeOptions={[20, 50, 100]}
          paginationModel={paginationModel}
          paginationMode="server"
          onPaginationModelChange={setPaginationModel}
          sortingMode="server"
          onSortModelChange={(newSortModel) => setSort(newSortModel)}
          slots={{
            toolbar: DataGridCustomToolbar as React.JSXElementConstructor<GridToolbarProps>,
          }}
          slotProps={{
            toolbar: { searchInput, setSearchInput, setSearch } as DataGridCustomToolbarProps,
          }}
        />
      </Box>
    </Box>
  );
};

export default Transactions;
