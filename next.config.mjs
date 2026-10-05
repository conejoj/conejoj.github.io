/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // GitHub Pages only serves static files: export plain HTML/CSS/JS to /out
  output: "export",
  images: {
    // The Next.js image optimizer needs a server, so serve images as-is
    unoptimized: true,
  },
};

export default nextConfig;
