const withImages = require("next-images");

module.exports = withImages({
  webpack(config) {
    config.resolve.fallback = { fs: false };

    return config;
  },
  images: {
    disableStaticImages: true,
    domains: [
      "localhost",
      "content.zetradex.com",
      "content.zetradex.media.com",
      "proper-chickens-ca14efe273.media.strapiapp.com",
      "partners.zetradex.com",
    ],
    loader: "default",
  },
  i18n: {
    locales: [
      "en",
      "ru",
      "id",
      "en-IN",
      "zh-CN",
      "zh-Hant-TW",
      "vi-VN",
      "th-TH",
      "ca-ES",
      "pt-PT",
      "ja-JP",
      "it-IT",
      "uz",
      "pa-Arab-PK",
    ],
    defaultLocale: "en",
  },
  experimental: {
    serverActions: true,
  },
});
