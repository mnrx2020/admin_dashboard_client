import { Typography, Box, useTheme } from "@mui/material";
import React from 'react';
import { PaletteColorOptions } from "@mui/material/styles";

interface HeaderProps {
  title: string;
  subtitle: string;
}

declare module '@mui/material/styles' {
  interface PaletteColor {
    100?: string;
    300?: string;
  }
  interface Palette {
    secondary: PaletteColor;
  }
  interface PaletteOptions {
    secondary?: PaletteColorOptions;
  }
}


const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  const theme = useTheme();

  return (
    <Box>
      <Typography
        variant="h2"
        color={theme.palette.secondary['100']}
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography
        variant="h5"
        color={theme.palette.secondary['300']}
      >
        {subtitle}
      </Typography>
    </Box>
  );
}

export default Header;
