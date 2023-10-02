<script>
	import Hr from '../components/Hr.svelte';
	import { base } from '$app/paths';
</script>

<main>
	<div class="flex flex-col lg:flex-row justify-center items-center lg:my-20">
		<div class="w-full lg:w-2/5 text-center lg:text-left mb-10 lg:mb-0">
			<div class="flex items-center justify-center lg:justify-start gap-2 mb-10">
				<Hr />
				<h2>Nice to meet you, I'm Wendy!</h2>
				<Hr />
			</div>

			<h3>
				Front-end developer <br />
				Sports enthusiast
			</h3>

			<p class="text-gray-500 text-sm md:text-md xl:text-lg mb-10">
				From surfing the web to surfing waves, I love taking on a new challenge. I turned to
				freelancing in september 2023 and I'm here to help you build the accessible digital product
				of your dreams.
			</p>

			<hr class="text-gray-500 mb-5" />

			<span class="text-gray-500 text-sm"
				>Update september 2023: <b>not available for projects</b></span
			>
		</div>

		<div class="w-1/3">
			<img class="w-4/5 ml-10" src="{base}/pictures/Wendy.png" alt="Nice to meet you! I'm Wendy" />
		</div>
	</div>
</main>
