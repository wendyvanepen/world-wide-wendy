<script lang="ts">
	import { onMount } from 'svelte';
	import Hr from '../../components/Hr.svelte';
	import Cv from './Cv.svelte';
	import type { CvInfo } from '.';

	let cv: CvInfo = {
		intro: '',
		infoTitle: '',
		info: {
			dateOfBirth: '',
			nationality: '',
			license: '',
			hobbies: ''
		},
		skillsTitle: '',
		educationTitle: '',
		education: [],
		courseTitle: '',
		courses: [],
		items: []
	};
	let selectedLanguage = 'en';

	const fetchTranslations = async (lang: string) => {
		const response = await fetch(`src/routes/work/translations/${lang}.json`);
		if (response.ok) {
			let res = await response.json();
			cv = res as CvInfo;
			console.log('Fetched', cv);
		} else {
			console.error('Fetch error:', response.status);
		}
	};

	onMount(() => {
		fetchTranslations(selectedLanguage);
	});

	const toggleLanguage = () => {
		selectedLanguage = selectedLanguage === 'en' ? 'nl' : 'en';
		fetchTranslations(selectedLanguage);
	};
</script>

<div>
	<div class="flex justify-center items-center mb-8">
		<Hr />
		<h2>Curriculum Vitae</h2>
		<Hr />
	</div>

	<div class="flex justify-center items-center mb-8">
		<button
			class="px-4 py-2 bg-blue-500 text-white rounded-full mr-2 focus:outline-none focus:ring focus:border-blue-300 hover:bg-blue-600"
			on:click={toggleLanguage}
			disabled={selectedLanguage === 'en'}
			class:opacity-50={selectedLanguage === 'en'}
			class:cursor-not-allowed={selectedLanguage === 'en'}
		>
			English
		</button>

		<button
			class="px-4 py-2 bg-blue-500 text-white rounded-full focus:outline-none focus:ring focus:border-blue-300 hover:bg-blue-600"
			on:click={toggleLanguage}
			disabled={selectedLanguage === 'nl'}
			class:opacity-50={selectedLanguage === 'nl'}
			class:cursor-not-allowed={selectedLanguage === 'nl'}
		>
			Nederlands
		</button>
	</div>
</div>
<Cv {cv} />
