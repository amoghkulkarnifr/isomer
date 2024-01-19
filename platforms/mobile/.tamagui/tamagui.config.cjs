var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ../../node_modules/.pnpm/@tamagui+react-native-media-driver@1.86.6_react-native@0.73.2/node_modules/@tamagui/react-native-media-driver/dist/cjs/matchMedia.js
var require_matchMedia = __commonJS({
  "../../node_modules/.pnpm/@tamagui+react-native-media-driver@1.86.6_react-native@0.73.2/node_modules/@tamagui/react-native-media-driver/dist/cjs/matchMedia.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var matchMedia_exports = {};
    __export2(matchMedia_exports, {
      matchMedia: () => matchMedia
    });
    module2.exports = __toCommonJS2(matchMedia_exports);
    var matchMedia = globalThis.matchMedia;
  }
});

// ../../node_modules/.pnpm/@tamagui+react-native-media-driver@1.86.6_react-native@0.73.2/node_modules/@tamagui/react-native-media-driver/dist/cjs/createMedia.js
var require_createMedia = __commonJS({
  "../../node_modules/.pnpm/@tamagui+react-native-media-driver@1.86.6_react-native@0.73.2/node_modules/@tamagui/react-native-media-driver/dist/cjs/createMedia.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var createMedia_exports = {};
    __export2(createMedia_exports, {
      createMedia: () => createMedia2
    });
    module2.exports = __toCommonJS2(createMedia_exports);
    var import_web = require("@tamagui/core");
    var import_matchMedia = require_matchMedia();
    function createMedia2(media) {
      return (0, import_web.setupMatchMedia)(import_matchMedia.matchMedia), media;
    }
    __name(createMedia2, "createMedia");
  }
});

// ../../node_modules/.pnpm/@tamagui+react-native-media-driver@1.86.6_react-native@0.73.2/node_modules/@tamagui/react-native-media-driver/dist/cjs/index.js
var require_cjs = __commonJS({
  "../../node_modules/.pnpm/@tamagui+react-native-media-driver@1.86.6_react-native@0.73.2/node_modules/@tamagui/react-native-media-driver/dist/cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames2(from))
          !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      return to;
    }, "__copyProps");
    var __reExport = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport(src_exports, require_createMedia(), module2.exports);
    __reExport(src_exports, require_matchMedia(), module2.exports);
  }
});

// tamagui.config.ts
var tamagui_config_exports = {};
__export(tamagui_config_exports, {
  default: () => tamagui_config_default,
  tokens: () => tokens
});
module.exports = __toCommonJS(tamagui_config_exports);
var import_react_native_media_driver = __toESM(require_cjs());
var import_core = require("@tamagui/core");
var interFont = (0, import_core.createFont)({
  family: "Inter, Helvetica, Arial, sans-serif",
  // keys used for the objects you pass to `size`, `lineHeight`, `weight`
  // and `letterSpacing` should be consistent. The `createFont` function
  // will fill-in any missing values if `lineHeight`, `weight` or `letterSpacing`
  // are subsets of `size`
  size: {
    1: 12,
    2: 14,
    3: 15,
    4: 20
  },
  lineHeight: {
    // 1 will be 22
    2: 22
  },
  weight: {
    1: "300",
    // 2 will be 300
    3: "600"
  },
  letterSpacing: {
    1: 0,
    2: -1
    // 3 will be -1
  },
  // (native) swap out fonts by face/style
  face: {
    300: { normal: "InterLight", italic: "InterItalic" },
    600: { normal: "InterBold" }
  }
});
var size = {
  0: 0,
  1: 5,
  2: 10,
  true: 10
  // ....
};
var tokens = (0, import_core.createTokens)({
  size,
  space: { ...size, "-1": -5, "-2": -10 },
  radius: { 0: 0, 1: 3, true: 3 },
  zIndex: { 0: 0, 1: 100, 2: 200, true: 100 },
  color: {
    white: "#fff",
    black: "#000"
  }
});
var appConfig = (0, import_core.createTamagui)({
  fonts: {
    // for tamagui, heading and body are assumed
    heading: interFont,
    body: interFont
  },
  tokens,
  themes: {
    light: {
      bg: "#f2f2f2",
      color: tokens.color.black
    },
    dark: {
      bg: "#111",
      color: tokens.color.white
    }
  },
  // `@tamagui/core` doesn't provide media query capabilities out of the box
  // for native as it is de-coupled from react-native.
  // For web-only, media queries work out of the box and you can avoid the
  // `createMedia` call here by passing the media object directly.
  // If targeting React Native, add this driver and use this `createMedia` helper.
  // If web-only you can leave out `createMedia` and just use an object.
  media: (0, import_react_native_media_driver.createMedia)({
    sm: { maxWidth: 860 },
    gtSm: { minWidth: 860 + 1 },
    short: { maxHeight: 820 },
    hoverNone: { hover: "none" },
    pointerCoarse: { pointer: "coarse" }
  }),
  // optional:
  // add custom shorthand props
  // note: as const is important, without it you may see breaking types
  shorthands: {
    px: "paddingHorizontal",
    f: "flex",
    w: "width"
  },
  // Experimental / advanced, only for overriding the core component styles
  // Prefer to use styled() for building your own, only useful for edge cases.
  defaultProps: {
    Text: {
      // override any default props here
    }
  }
});
var tamagui_config_default = appConfig;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  tokens
});
