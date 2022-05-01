<script>
	import { base } from '$app/paths';
	let count = 0;
</script>

<div
	class="flex min-h-screen flex-col items-center justify-center gap-10 bg-gradient-to-tr from-purple-300 to-pink-400"
>
	<div class="flex flex-col items-center gap-4">
		<a href="https://github.com/joseph-bravo/svelte-tailwind-ghpages-template">
			<h1
				class="pop-on-hover  rounded-full bg-white px-12 py-6 text-4xl font-semibold hover:bg-purple-200"
			>
				SvelteKit + Tailwind CSS
			</h1>
		</a>
		<h1
			class="pop-on-hover  rounded-full bg-white px-8 py-4 text-2xl font-semibold"
		>
			template for GitHub Pages
		</h1>
	</div>
	<img
		class="pop-on-hover w-96 rounded-full border-8 shadow-teal-100"
		src="{base}/assets/images/cat-dance.gif"
		alt="vibing cat gif"
	/>
	<button
		on:click={() => count++}
		class="pop-on-hover rounded-full bg-white px-8 py-4 text-2xl font-bold hover:bg-purple-200 active:bg-purple-400"
		>count: {count}</button
	>
</div>

<style>
	.pop-on-hover {
		@apply transition duration-300 ease-in-out hover:scale-110;
	}
</style>
