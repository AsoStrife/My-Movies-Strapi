module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'http://azure.andreacorriga.com/my-movies/',
  app: {
    keys: env.array('APP_KEYS'),
  },
});
