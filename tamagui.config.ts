import { createMedia } from "@tamagui/react-native-media-driver";
import { createFont, createTamagui, createTokens } from "tamagui"; // or '@tamagui/core'

const interFont = createFont({
  family: "Inter, Helvetica, Arial, sans-serif",
  // keys used for the objects you pass to `size`, `lineHeight`, `weight`
  // and `letterSpacing` should be consistent. The `createFont` function
  // will fill-in any missing values if `lineHeight`, `weight` or `letterSpacing`
  // are subsets of `size`
  size: {
    1: 12,
    2: 14,
    3: 15,
    4: 20,
  },
  lineHeight: {
    // 1 will be 22
    2: 22,
  },
  weight: {
    1: "300",
    // 2 will be 300
    3: "600",
  },
  letterSpacing: {
    1: 0,
    2: -1,
    // 3 will be -1
  },
  // (native) swap out fonts by face/style
  face: {
    300: { normal: "InterLight", italic: "InterItalic" },
    600: { normal: "InterBold" },
  },
});

// these keys can be different, but again we highly recommend consistency
const size = {
  0: 0,
  1: 5,
  2: 10,
  true: 10,
  // ....
};

export const tokens = createTokens({
  size,
  space: { ...size, "-1": -5, "-2": -10 },
  radius: { 0: 0, 1: 3, true: 3 },
  zIndex: { 0: 0, 1: 100, 2: 200, true: 100 },
  color: {
    white: "#fff",
    black: "#000",
  },
});

const appConfig = createTamagui({
  fonts: {
    // for tamagui, heading and body are assumed
    heading: interFont,
    body: interFont,
  },
  tokens,
  themes: {
    light: {
      bg: "#f2f2f2",
      color: tokens.color.black,
    },
    dark: {
      bg: "#111",
      color: tokens.color.white,
    },
  },

  // `@tamagui/core` doesn't provide media query capabilities out of the box
  // for native as it is de-coupled from react-native.

  // For web-only, media queries work out of the box and you can avoid the
  // `createMedia` call here by passing the media object directly.

  // If targeting React Native, add this driver and use this `createMedia` helper.
  // If web-only you can leave out `createMedia` and just use an object.
  media: createMedia({
    sm: { maxWidth: 860 },
    gtSm: { minWidth: 860 + 1 },
    short: { maxHeight: 820 },
    hoverNone: { hover: "none" },
    pointerCoarse: { pointer: "coarse" },
  }),

  // optional:

  // add custom shorthand props
  // note: as const is important, without it you may see breaking types
  shorthands: {
    px: "paddingHorizontal",
    f: "flex",
    w: "width",
  } as const,

  // Experimental / advanced, only for overriding the core component styles
  // Prefer to use styled() for building your own, only useful for edge cases.
  defaultProps: {
    Text: {
      // override any default props here
    },
  },
});

type AppConfig = typeof appConfig;

// this will give you types for your components
// note - if using your own design system, put the package name here instead of tamagui
declare module "tamagui" {
  interface TamaguiCustomConfig extends AppConfig {}

  // if you want types for group styling props, define them like so:
  interface TypeOverride {
    groupNames(): "a" | "b" | "c";
  }
}

export default appConfig;
