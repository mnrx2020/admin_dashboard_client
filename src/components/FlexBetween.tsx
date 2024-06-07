import React from "react";
import { Box, BoxProps } from "@mui/material";
import { styled } from "@mui/system";

const FlexBetween = styled(Box)<BoxProps>({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export default FlexBetween;
