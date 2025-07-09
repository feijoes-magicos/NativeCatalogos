module.exports = {
  presets: ["babel-preset-expo"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"], // pasta raiz do seu código
        alias: {
          "@components": "./src/components",
          "@assets": "./src/assets",
        },
      },
    ],
    [
      "module:react-native-dotenv",
      {
        moduleName: "@env",
        path: ".env",
      },
    ],
  ],
};
