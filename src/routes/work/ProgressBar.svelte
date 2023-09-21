<script>
	export let label = 'React.JS';
	export let progress = 45; // Default progress value

	// Calculate the width for the progress bar
	let progressBarWidth = `${progress}%`;
</script>

<div class="flex">
	<div class="w-2/3">
		<div>{label}</div>
	</div>
	<div class="w-2/3 self-center">
		<div class="w-full bg-gray-200 rounded-full h-2.5">
			<div class="bg-indigo-600 h-2.5 rounded-full" style="width: {progressBarWidth}" />
		</div>
	</div>
</div>
