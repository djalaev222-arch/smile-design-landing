const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = "smile-design-landing";
const basePath = isGithubPages ? `/${repoName}` : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath,
  assetPrefix: isGithubPages ? `/${repoName}/` : "",
  env: {
    // next/image emits a bare "/logo.png" for unoptimized + static export —
    // basePath isn't applied automatically in that combination, so prefix it manually.
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
