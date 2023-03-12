/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  compiler:{
    styledComponents:{
      ssr:true
    }
  },
  swcMinify: true
  /* config options here */
}

export default nextConfig;