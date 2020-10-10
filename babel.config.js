module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: { browsers: ['>0.25%', 'not dead', 'IE 11'] },
        modules: 'umd',
      },
    ],
  ],
};
