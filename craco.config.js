const path = require("path");
module.exports = {
  webpack: {
    alias: {
      ":app": path.resolve(__dirname, "src/app/"),
      ":components": path.resolve(__dirname, "src/components/"),
      ":features": path.resolve(__dirname, "src/features/"),
      ":hocs": path.resolve(__dirname, "src/hocs/"),
      ":hooks": path.resolve(__dirname, "src/hooks/"),
    },
  },
};
