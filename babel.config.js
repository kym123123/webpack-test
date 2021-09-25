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
          '@components': './src/components',
          '@modules': './src/modules',
          '@utils': './src/utils',
          '@test': './src/__test__',
        },
      },
    ],
  ],
};
