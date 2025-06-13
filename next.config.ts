import type { NextConfig } from "next";

const nextConfig: NextConfig = {
<<<<<<< HEAD
	/* config options here */
	webpack: (config) => {
		config.externals["@solana/web3.js"] = "commonjs @solana/web3.js";
		config.externals["@solana/spl-token"] = "commonjs @solana/spl-token";
		return config;
	},
=======
  /* config options here */
  webpack: (config) => {
    config.externals["@solana/web3.js"] = "commonjs @solana/web3.js";
    config.externals["@solana/spl-token"] = "commonjs @solana/spl-token";
    return config;
  },
>>>>>>> c33a7d3 (initial commit)
};

export default nextConfig;
