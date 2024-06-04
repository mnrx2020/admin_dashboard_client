import { GridColumnMenu } from "@mui/x-data-grid";

const CustomColumnMenu = (props) => {
  return (
    <GridColumnMenu
      {...props}
      slots={{
        // Hide `columnMenuColumnsItem`
        columnMenuSortItem: null,
      }}
    />
  );
};

export default CustomColumnMenu;