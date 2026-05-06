/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  basePath: isGitHubPages ? "/wildan-portfolio" : "",
  assetPrefix: isGitHubPages ? "/wildan-portfolio/" : "",
  output: "export",
  images: {
    unoptimized: true
  }
};

export default nextConfig;
