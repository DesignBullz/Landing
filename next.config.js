// module.exports = {
//   reactStrictMode: true,
// }

module.exports = {
  reactStrictMode: true, // Keep reactStrictMode as is
  webpack(config, { isServer }) {
    // Add video file loader for Webpack
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/videos/",
          outputPath: "static/videos/",
          name: "[name]-[hash].[ext]",
        },
      },
    });

    return config;
  },
};
