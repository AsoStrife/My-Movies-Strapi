module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'dee09c17095a90e367c00e8613ff68f7'),
  },
});
