import React from "react";
import { GridColumnMenu, GridColumnMenuProps } from "@mui/x-data-grid";

const CustomColumnMenu: React.FC<GridColumnMenuProps> = (props) => {
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
