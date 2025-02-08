/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    BACKEND_SERVICE: process.env.SAG_BACKEND,
    CORS: process.env.CORS,
  },
}
