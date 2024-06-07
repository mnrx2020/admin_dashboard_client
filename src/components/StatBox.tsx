import React, { ReactElement } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "./FlexBetween";

interface StatBoxProps {
  title: string;
  value: string | number;
  increase: string;
  icon: ReactElement;
  description: string;
}

const StatBox: React.FC<StatBoxProps> = ({ title, value, increase, icon, description }) => {
  const theme = useTheme();
  return (
    <Box
      component="div"
      sx={{
        gridColumn: "span 2",
        gridRow: "span 1",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        p: "1.25rem 1rem",
        flex: "1 1 100%",
        backgroundColor: theme.palette.background.paper, // Changed from alt to paper
        borderRadius: "0.55rem"
      }}
    >
      <FlexBetween>
        <Typography variant="h6" sx={{ color: theme.palette.secondary[100] }}>
          {title}
        </Typography>
        {icon}
      </FlexBetween>

      <Typography
        variant="h3"
        fontWeight="600"
        sx={{ color: theme.palette.secondary[200] }}
      >
        {value}
      </Typography>
      <FlexBetween gap="1rem">
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: theme.palette.secondary.light }}
        >
          {increase}
        </Typography>
        <Typography>{description}</Typography>
      </FlexBetween>
    </Box>
  );
};

export default StatBox;
