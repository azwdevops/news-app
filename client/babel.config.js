module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@": "./",
            "@components": "./app/components/",
            "@cards": "./app/components/cards/",
            "@hooks": "./app/components/hooks/",
            "@screens": "./app/components/screens/",
            "@common": "./app/components/common/",
            "@lists": "./app/components/lists/",
            "@navigation": "./app/components/navigation/",
          },
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      ],
    ],
  };
};
