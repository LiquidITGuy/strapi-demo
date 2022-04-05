module.exports = ({ env }) => ({
  url: env("https://sibe-strapi-demo.herokuapp.com/"),
  proxy: true,
  app: {
    keys: env.array("APP_KEYS", ["010415b78b3fd9e2", "df5dc73c8a95df53"]),
  },
});
