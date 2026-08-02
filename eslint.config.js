import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  {
    ignores: ['build/', 'coverage/', 'cypress/screenshots/', 'cypress/videos/'],
  },
  {
    files: ['src/**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      // Includes the React Compiler rules: code these flag is code the
      // compiler cannot safely memoize.
      reactHooks.configs.flat['recommended-latest'],
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
  }
)
