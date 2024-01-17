# Isomer

A minimalist monorepo starter for cross-platform development with React Native (using Expo and Vite with Tamagui)

### High-level goals

- Code sharing between web and mobile
  - Web and mobile platforms should use the same visual components as much as possible (with minimal alterations, if not none)
  - Apart from "views" of the application, "view-model" and "model" portions should be shared
- Lean config
  - Should not have spaghettified config files
  - Distributed and hierarchical config structure (e.g. `package.json` hierarchy)
- Newbie-friendly
  - Self-explanatory directory structure
  - Top-level setup commands
  - Separation of concerns between workspaces
    - Separate workspace for common components
    - Separate workspace for mobile dev (uses common components with **_minimal_** modifications)
    - Separate workspace for web dev (uses common components with _some_ modifications)
    - Separate workspace to hold web and mobile builds
- Extensibility / Modularity
  - Testing libraries/frameworks for web (jest, RTL, Playwright) and mobile (jest, RNTL, Detox)
  - Code documentation (Docusauras)
  - Storybook
