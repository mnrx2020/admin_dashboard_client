import { PaletteColorOptions } from '@mui/material/styles/createPalette';

declare module '@mui/material/styles' {
  interface PaletteColor {
    0?: string;
    10?: string;
    50?: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    1000?: string;
  }

  interface TypeBackground {
    alt?: string;
  }

  interface Palette {
    primary: PaletteColor;
    secondary: PaletteColor;
    neutral: PaletteColor;
    background: TypeBackground;
  }

  interface PaletteOptions {
    primary?: PaletteColorOptions;
    secondary?: PaletteColorOptions;
    neutral?: PaletteColorOptions;
    background?: Partial<TypeBackground>;
  }
}
