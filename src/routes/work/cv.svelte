<script lang="ts">
	import type { CvInfo } from '.';
	import ProgressBar from '../../components/ProgressBar.svelte';
	export let cv: CvInfo;
</script>

<div class="flex flex-col md:flex-row justify-center gap-4">
	<div class="w-full md:w-1/3 mr-6">
		<!-- Single column spanning the top -->
		<div class="w-1/2 md:w-full mb-4 border-b-2 border-aubergine rounded">
			<img src="pictures/main_cv.jpg" alt="Wendy" />
		</div>
		<p class="font-bold text-gray-700 text-lg">
			Wendy van Epen <br />
			Front-end developer
		</p>
		<hr class="w-48 h-1 my-3 bg-midnight" />
		<p class="text-gray-500 text-sm">
			{cv.intro}
		</p>

		<hr class="w-48 h-1 my-3 bg-midnight" />

		<p class="font-bold text-gray-700 text-lg">{cv.infoTitle}</p>
		<ul class="text-sm list-disc pl-4">
			<li>{cv.info.dateOfBirth}</li>
			<li>{cv.info.nationality}</li>
			<li>{cv.info.license}</li>
			<li>{cv.info.hobbies}</li>
		</ul>

		<hr class="w-48 h-1 my-3 bg-midnight" />

		<p class="font-bold text-gray-700 text-lg">{cv.skillsTitle}</p>
		<ul class="text-gray-700 text-sm">
			<li>
				<ProgressBar label="React.JS" progress={45} />
			</li>
			<li><ProgressBar label="HTML" progress={80} /></li>
			<li><ProgressBar label="JS" progress={80} /></li>
			<li><ProgressBar label="CSS/SASS" progress={80} /></li>
			<li><ProgressBar label="TypeScript" progress={66} /></li>
			<li><ProgressBar label="A11y/WCAG" progress={80} /></li>
			<li><ProgressBar label="Git" progress={75} /></li>
			<li><ProgressBar label="Jira" progress={80} /></li>
			<li><ProgressBar label="Java" progress={50} /></li>
			<li><ProgressBar label="Spring Boot" progress={50} /></li>
			<li><ProgressBar label="Next.JS" progress={66} /></li>
			<li><ProgressBar label="Redux" progress={66} /></li>
			<li><ProgressBar label="GraphQL" progress={90} /></li>
		</ul>

		<hr class="w-48 h-1 my-3 bg-midnight" />

		<p class="font-bold text-gray-700 text-lg">{cv.educationTitle}</p>
		<ul class="text-sm list-disc pl-4">
			{#each cv.education as item (item.id)}
				<li>
					{item.school}<br />
					{item.date}<br />
					{item?.description}<br />
				</li>
			{/each}
		</ul>

		<hr class="w-48 h-1 my-3 bg-midnight" />

		<p class="font-bold text-gray-700 text-lg">{cv.courseTitle}</p>
		<ul class="text-sm list-disc pl-4">
			{#each cv.courses as course (course.id)}
				<li>
					{course.title}<br />
					{course.date}<br />
				</li>
			{/each}
		</ul>
	</div>

	<div class="w-full md:w-3/5">
		{#each cv.items as item (item.id)}
			<div class="p-4 border border-aubergine mb-4 rounded">
				<div class="flex cv-center">
					{#if item.logo}
						<img class="w-10 mr-2" src={item.logo.src} alt={item.logo.alt} />
					{/if}
					<h2 class="text-mb font-semibold mb-2 justify-center">{item.title}</h2>
				</div>

				<hr class="w-full h-1 my-3 bg-midnight" />

				<p class="text-sm text-gray-500">
					{item.startMonth}
					{item.startYear} - {item.endMonth}
					{item.endYear}
				</p>

				<p class="text-sm">{item.description}</p>
				<ul class="mt-2 text-sm list-disc pl-4">
					{#if item.tasks && item.tasks.length > 0}
						{#each item.tasks as task (task.id)}
							<li>{task.description}</li>
						{/each}
					{/if}
				</ul>
				<br />
				{#if item.skills && item.technologies}
					<p class="text-sm">
						<span class="font-bold text-bold">Stack:</span>
						<span>{item.skills}</span>
					</p>
					<p class="text-sm">
						<span class="font-bold text-bold">Tech:</span>
						<span>{item.technologies}</span>
					</p>
				{/if}
			</div>
		{/each}
	</div>
</div>
