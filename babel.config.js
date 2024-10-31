module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@components': './src/components',
          '@assets': './assets',
          '@services': './src/services',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@type': './src/types',
        },
      },
    ],
  ],
};
