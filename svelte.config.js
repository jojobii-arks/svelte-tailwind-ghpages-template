import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

//? Make sure to edit this!

const yourRepoName = 'svelte-tailwind-ghpages-template';
const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build'
		}),
		prerender: {
			default: true
		},
		paths: {
			base: dev ? '' : '/' + yourRepoName
		}
	},
	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
