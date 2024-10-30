/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    'postcss-mixins': {},
    'postcss-simple-vars': {},
    'postcss-calc': {},
    'postcss-import': {},
    'tailwindcss/nesting': 'postcss-nesting',
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;
