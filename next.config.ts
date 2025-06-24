import type { NextConfig } from "next";

const nextConfig: NextConfig = {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8b3931a (chore: lint)
	/* config options here */
	webpack: (config) => {
		config.externals["@solana/web3.js"] = "commonjs @solana/web3.js";
		config.externals["@solana/spl-token"] = "commonjs @solana/spl-token";
		return config;
	},
<<<<<<< HEAD
=======
  /* config options here */
  webpack: (config) => {
    config.externals["@solana/web3.js"] = "commonjs @solana/web3.js";
    config.externals["@solana/spl-token"] = "commonjs @solana/spl-token";
    return config;
  },
>>>>>>> c33a7d3 (initial commit)
=======
>>>>>>> 8b3931a (chore: lint)
};

export default nextConfig;
