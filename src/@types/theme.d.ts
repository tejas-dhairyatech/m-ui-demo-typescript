// theme.d.ts
import { Theme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    customShadows: {
      z1: string;
      z2: string;
      z3: string;
      // Add other custom shadow levels here
    };
  }

  interface ThemeOptions {
    customShadows?: {
      z1?: string;
      z2?: string;
      z3?: string;
      // Add other custom shadow levels here if needed
    };
  }
}
