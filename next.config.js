// // module.exports = {
// //   reactStrictMode: true,
// // }

// module.exports = {
//   reactStrictMode: true, // Keep reactStrictMode as is
//   webpack(config, { isServer }) {
//     // Add video file loader for Webpack
//     config.module.rules.push({
//       test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
//       use: {
//         loader: "file-loader",
//         options: {
//           publicPath: "/_next/static/videos/",
//           outputPath: "static/videos/",
//           name: "[name]-[hash].[ext]",
//         },
//       },
//     });

//     return config;
//   },
// };

module.exports = {
  reactStrictMode: true, // Keep reactStrictMode as is
  images: {
    domains: ["www.csdgaadi.com"], // Allow external image domains here
  },
  webpack(config, { isServer }) {
    // Add video file loader for Webpack
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/, // Add media types you want to handle
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/videos/", // Public URL path where videos will be served
          outputPath: "static/videos/", // Path where videos will be saved in the build output
          name: "[name]-[hash].[ext]", // Naming convention for the files
        },
      },
    });

    return config;
  },
};
