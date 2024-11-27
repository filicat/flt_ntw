module.exports = {
  presets: ['module:@react-native/babel-preset', 'nativewind/babel'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        allowUndefined: true,
      },
    ],
    'react-native-reanimated/plugin',
    'babel-plugin-transform-typescript-metadata',
    '@babel/plugin-transform-flow-strip-types',
    ['@babel/plugin-proposal-decorators', {legacy: true}],
  ],
};
