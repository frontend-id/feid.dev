import { theme as baseTheme } from '@chakra-ui/core';
import { merge } from '@chakra-ui/utils';

const systemFonts =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

// 2. Extend the theme to include custom colors, fonts, etc.
const theme = merge(baseTheme, {
  colors: {
    brand: {
      900: '#5c081b',
      800: '#6f0d1c',
      700: '#8a151d',
      600: '#a5211f',
      500: '#c0392b',
      400: '#d9705a',
      300: '#ec9a7e',
      200: '#f8c5ab',
      100: '#fbe5d4',
      50: '#fdf2ea',
    },
  },
  fonts: {
    body: `Inter, ${systemFonts}`,
    heading: `Inter, ${systemFonts}`,
    mono: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace, monospace',
  },
});

export default theme;
