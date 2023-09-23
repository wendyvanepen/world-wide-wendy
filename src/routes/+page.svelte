<script>
	import Hr from '../components/Hr.svelte';
</script>

<main>
	<div class="flex flex-col lg:flex-row justify-center items-center lg:mb-20">
		<div class="w-full lg:w-2/5 text-center lg:text-left mb-20 lg:mb-0">
			<div class="flex items-center justify-center lg:justify-start gap-2 mb-10">
				<Hr />
				<h2 class="font-medium text-aubergine text-xl">Nice to meet you, I'm Wendy!</h2>
				<Hr />
			</div>

			<h2
				class="font-bold leading-[3.5rem] text-aubergine-dark text-3xl md:text-4xl xl:text-5xl mb-10"
			>
				Front-end developer <br />
				Sports enthusiast
			</h2>

			<p class="text-gray-500 text-sm md:text-md xl:text-lg mb-10">
				From surfing the web to surfing waves, I love taking on a new challenge. I turned to
				freelancing in september 2023 and I'm here to help you build the accessible digital product
				of your dreams.
			</p>

			<div class="space-y-5 lg:space-x-5 mb-10">
				<a
					href="/contact"
					class="block md:inline px-8 py-3 font-medium bg-midnight text-white text-lg rounded-md hover:bg-midnight-light transition ease-in-out duration-300"
					>Contact me</a
				>
			</div>

			<hr class="text-gray-500 mb-5" />

			<span class="text-gray-500 text-sm"
				>Update september 2023: <b>not available for projects</b></span
			>
		</div>

		<div class="w-1/3">
			<img class="w-4/5 ml-10" src="pictures/Wendy.png" alt="Nice to meet you! I'm Wendy" />
		</div>
	</div>
</main>
