<script>
	import '../app.css';
	export const prerender = true;
</script>

<section class="py-16">
	<div class="container max-w-screen-xl mx-auto px-4">
		<nav
			class="flex-wrap lg:flex items-center justify-between mb-10 xl:mb-28 border-b-4 border-midnight"
		>
			<div class="flex items-center mb-10 lg:mb-0">
				<img
					class="mr-4 w-[32] h-[32]"
					src="https://img.icons8.com/external-kmg-design-basic-outline-kmg-design/32/external-surfing-board-adventure-kmg-design-basic-outline-kmg-design.png"
					alt="external-surfing-board-adventure-kmg-design-basic-outline-kmg-design"
				/>
				<h1><a href="/">Wendy van Epen</a></h1>
			</div>

			<ul class="lg:flex flex-col lg:flex-row lg:items-center lg:space-x-20 mb-10 xl:mb-0">
				<li class="nav-item">
					<a href="/about">Get to know me</a>
				</li>
				<li class="nav-item">
					<a href="/work">Work</a>
				</li>
				<li class="nav-item">
					<a href="/contact">Let's get in touch</a>
				</li>
			</ul>
		</nav>

		<slot />

		<footer class="m-4">
			<div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
				<div class="items-center mb-4 lg:flex lg:items-center lg:justify-between">
					<div>
						<span class="self-center text-4xl font-groovyWendy whitespace-nowrap"
							>World Wide Wendy<br />
						</span>
						<span>Kvk: 91187850</span>
					</div>
					<ul
						class="flex flex-wrap items-center mb-6 gap-4 space-around text-sm font-medium md:my-4 dark:text-gray-400"
					>
						<li>
							<a
								href="https://www.linkedin.com/in/wendy-van-epen-00bb9032/"
								class="hover:grayscale mr-4 md:mr-6"
								><img src="/icons/linkedIn.svg" alt="linkedIn" /></a
							>
						</li>
						<li>
							<a href="https://www.facebook.com/wendy.vanepen/" class="hover:grayscale mr-4 md:mr-6"
								><img src="/icons/facebook.svg" alt="facebook" /></a
							>
						</li>
						<li>
							<a href="https://www.instagram.com/wendyvanepen/" class="hover:grayscale mr-4 md:mr-6"
								><img src="/icons/instagram.svg" alt="instagram" /></a
							>
						</li>
					</ul>
				</div>
				<hr class="mb-10 xl:m-8 border-b-4 border-midnight" />

				<div class="flex flex-col-reverse justify-between pt-1 pb-10 lg:flex-row">
					<p class="text-sm text-gray-600">© Wendy van Epen 2024</p>
					<ul class="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
						<li>
							<a
								href="https://icons8.com/"
								class="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
								>Icons by Icons8</a
							>
						</li>
						<li>
							<a
								href="https://svelte.dev/"
								class="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
								>Made with SvelteKit</a
							>
						</li>
						<li>
							<a
								href="https://tailwindcss.com/"
								class="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
								>TailwindCSS</a
							>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	</div>
</section>
