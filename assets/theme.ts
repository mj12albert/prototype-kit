import type { Theme } from "theme-ui";

const makeTheme = <T extends Theme>(t: T) => t;

export const theme = makeTheme({
  config: {
    useColorSchemeMediaQuery: false,
    useLocalStorage: false,
    initialColorModeName: "light"
  },

  fonts: {
    inter:
      '"Inter", system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    monospace:
      "ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace"
  },

  fontSizes: [
    12, // 0
    14, // 1
    16, // 2
    20, // 3
    24, // 4
    32, // 5
    40, // 6
    48 // 7
  ],

  lineHeights: {
    default: 1.5,
    heading: 1.2,
    tight: 1
  },

  space: [
    0, // 0
    2, // 1
    4, // 2
    8, // 3
    12, // 4
    16, // 5
    20, // 6
    24, // 7
    32, // 8
    40, // 9
    48, // 10
    64, // 11
    80, // 12
    96, // 13
    112, // 14
    128 // 15
  ],

  colors: {
    // Tailwind colors
    // https://github.com/tailwindlabs/tailwindcss/blob/master/src/public/colors.js
    scales: {
      zinc: [
        "#fafafa",
        "#f4f4f5",
        "#e4e4e7",
        "#d4d4d8",
        "#a1a1aa",
        "#71717a",
        "#52525b",
        "#3f3f46",
        "#27272a",
        "#18181b"
      ]
    }
  },

  styles: {
    // root is applied to <html> and will override global.css
    root: {
      fontFamily: "inter",
      overscrollBehavior: "auto",
      strong: {
        fontWeight: 600
      },
      code: {
        fontFamily: "mono"
      },
      pre: {
        fontFamily: "mono"
      }
    }
  }
});
