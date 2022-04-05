module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b4242d39fab4a1a632159a361a3e45d8'),
  },
});
