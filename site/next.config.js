


/**
 * Static Export Github Actions Tutorial:
 * https://github.com/gregrickaby/nextjs-github-pages 
 */

// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
	/**
	 * Enable static exports for the App Router.
	 *
	 * @see https://nextjs.org/docs/pages/building-your-application/deploying/static-exports
	 */
	output: "export",
  
	/**
	 * Set base path. This is usually the slug of your repository.
	 *
	 * @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
	 */
	basePath: "/",
  
	/**
	 * Disable server-based image optimization. Next.js does not support
	 * dynamic features with static exports.
	 *
	 * @see https://nextjs.org/docs/pages/api-reference/components/image#unoptimized
	 */
	images: {
		unoptimized: true,
		remotePatterns: [
			{
			protocol: 'https',
			hostname: '64.media.tumblr.com',
			},
		],
	},
  };
  
module.exports = nextConfig;