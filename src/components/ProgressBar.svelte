<script>
	export let label = 'Skill';
	export let progress = 50;

	let progressBarWidth = `${progress}%`;
</script>

<div class="flex">
	<div class="w-2/3">
		<div>{label}</div>
	</div>
	<div class="w-2/3 self-center">
		<div class="w-full bg-gray-200 rounded-full h-2.5">
			<div class="bg-aubergine h-2.5 rounded-full" style="width: {progressBarWidth}" />
		</div>
	</div>
</div>
