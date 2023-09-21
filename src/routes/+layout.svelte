<script>
	import '../app.css';
</script>

<section class="py-16">
	<div class="container max-w-screen-xl mx-auto px-4">
		<nav
			class="flex-wrap lg:flex items-center justify-between mb-10 xl:mb-28 border-b-4 border-indigo-500"
		>
			<div class="flex items-center mb-10 lg:mb-0">
				<h1 class="font-bold font-groovyWendy text-6xl"><a href="/">Wendy van Epen</a></h1>
			</div>

			<ul class="lg:flex flex-col lg:flex-row lg:items-center lg:space-x-20 mb-10 xl:mb-0">
				<li
					class="font-medium text-gray-700 text-lg hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0"
				>
					<a href="/about">Get to know me</a>
				</li>
				<li
					class="font-medium text-gray-700 text-lg hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0"
				>
					<a href="/work">Work</a>
				</li>
				<li
					class="font-medium text-gray-700 text-lg hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0"
				>
					<a href="/contact">Get in contact</a>
				</li>
			</ul>
		</nav>

		<slot />

		<footer class="bg-white rounded-lg shadow m-4">
			<div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
				<div class="sm:flex sm:items-center sm:justify-between flex items-center mb-4 sm:mb-0">
					<div>
						<span class="self-center text-4xl font-groovyWendy whitespace-nowrap"
							>World Wide Wendy<br /></span
						><span>Kvk: 91187850</span>
					</div>
					<ul
						class="flex flex-wrap items-center mb-6 gap-4 space-around text-sm font-medium sm:mb-0 dark:text-gray-400"
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
				<hr class="mb-10 xl:m-8 border-b-4 border-indigo-500" />
				<span class="block text-gray-500 sm:text-center"
					>© 2023 Wendy van Epen | Icons by <a href="https://icons8.com/">Icons8</a> | Website made
					with
					<a href="https://svelte.dev/">Svelte</a>
					and <a href="https://tailwindcss.com/">TailwindCSS</a></span
				>
			</div>
		</footer>
	</div>
</section>
