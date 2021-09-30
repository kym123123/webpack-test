module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: '.',
        alias: {
          '@': './src',
          '@components': './src/components',
          '@modules': './src/modules',
          '@utils': './src/utils',
          '@tests': './src/__tests__',
        },
      },
    ],
    '@babel/plugin-transform-runtime',
  ],
};
