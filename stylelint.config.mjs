// stylelint.config.mjs
export default {
  extends: ['stylelint-config-standard'],
  rules: {
    'color-hex-length': 'short',
    'selector-class-pattern': '^[a-z]',
    'max-nesting-depth': 3,
  }
}