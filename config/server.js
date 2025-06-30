module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: [767927a057a5918d48acc118afebe6dd, e12ebcf7ba0fd28121635e460dec52b6],
  },
});