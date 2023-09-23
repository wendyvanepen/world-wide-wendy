<script>
	import { page } from '$app/stores';
</script>

<div class="flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg">
	<img class="w-1/6 ml-10 grayscale" src="pictures/blurred.png" alt="Error" />
	<p class="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-midnight">
		{$page.status}
	</p>
	<p class="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-aubergine-dark mt-4">
		{$page?.error?.message}
	</p>
	<p class="text-aubergine-dark mt-8 py-2 border-y-2 text-center">
		Ehm, looks like something went wrong. Apologies.
	</p>
</div>
