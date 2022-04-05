module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'bcefd0ad0f961c6ff6f88ffc4f2f3010'),
  },
});
