Using

- [SvelteKit](https://kit.svelte.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
  - via [create-svelte](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).
- [gh-pages](https://www.npmjs.com/package/gh-pages)

Based off https://github.com/metonym/sveltekit-gh-pages

## Guide

- Clone in Remote Container in VSCode.
- Edit line 6 of `svelte.config.js` to match repository name.
  - `const yourRepoName = 'svelte-tailwind-ghpages-template';`
- Remember to install all dependencies (`npm i`).
- Run development server with `npm run dev`.
- Deploy to GitHub Sites via gh-pages with `npm run deploy`.
  - This builds the app in `build/` and pushes that folder into the branch `gh-pages`.
  - If previewing via `npm run preview`, make sure to add your repo to the path.
    - Example: `localhost:3000/your-repo-name`.

## During Development

- When using relative URLs to `static/`, prepend url with `{base}`.
  - Use `import { base } from '$app/paths';` at top of script.
