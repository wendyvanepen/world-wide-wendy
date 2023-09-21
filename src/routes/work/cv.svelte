<script lang="ts">
	import ProgressBar from './ProgressBar.svelte';

	type Task = {
		id: string;
		description: string;
	};

	type Image = {
		src: string;
		alt: string;
	};

	type Item = {
		id: number;
		title: string;
		logo?: Image;
		startYear: string;
		startMonth: string;
		endYear: string;
		endMonth: string;
		description: string;
		tasks?: Task[];
		skills?: string;
		technologies?: string;
	};

	const items: Item[] = [
		{
			id: 1,
			title: 'React.JS developer bij GrandVision N.V., Amsterdam Schiphol',
			logo: {
				src: './GV.jpeg',
				alt: 'GrandVision'
			},
			startYear: '2021',
			startMonth: 'February',
			endYear: '2023',
			endMonth: 'August',
			description:
				'React.JS ontwikkelaar op het wereldwijde multichannel CXCD-platform, actief in 40+ landen. Het project bestond uit 6 volledig zelfsturende, internationale operationele agile/scrum teams met in totaal meer dan 60 ontwikkelaars.',
			tasks: [
				{
					id: '1',
					description:
						'Intensief samengewerkt met de head of design en het UX-team (7 ontwerpers) om de toegankelijkheid en klantbeleving te verbeteren en onze manier van werken tussen disciplines te optimaliseren'
				},
				{
					id: '2',
					description:
						'Wekelijks deployen middels CI/CD en scripting van het gehele platform naar de test omgevingen, op zowel ons core project als voor de 12+ landen waarin het platform live was.'
				},
				{
					id: '3',
					description:
						'Leidinggeven aan het interne toegankelijkheidsproject om WCAG-conform te worden voor alle landen, kennis gedeeld via op maat gemaakte workshops en afstemming gehouden met de nieuwste wereldwijde richtlijnen.'
				},
				{
					id: '4',
					description: 'Verantwoordelijk voor de volledige migratie van ons domein naar Next.JS.'
				},
				{
					id: '5',
					description:
						'Veel kennisdeling middels een bi-weekly community meetup, zowel met het design team als met de front-end.'
				}
			],
			skills:
				'React.JS, TypeScript, SASS, Storybook, REST, Next.JS, WCAG, Redux, GraphQL, Git, Jira',
			technologies: 'Auth0, Commercetools, Bloomreach CMS, CloudFlare, Terraform, Algolia, Azure'
		},
		{
			id: 2,
			title: 'React.JS developer bij KPN, Rotterdam',
			logo: {
				src: './kpn.jpeg',
				alt: 'KPN'
			},
			startYear: '2019',
			startMonth: 'January',
			endYear: '2021',
			endMonth: 'February',
			description:
				'Greenfield bedrijfsproject MobileConnect. Gecombineerde UX/front-end rol. Zeer klein team met slechts 1 andere back-ender en front-ender. Eerste jaar met Spring Boot gewerkt en actief geweest binnen de back-end, na een jaar de UX/front-end rol opgepakt.',
			tasks: [
				{
					id: '1',
					description:
						'Intensieve samenwerking met UX/UI designer waarbij dagelijkse ontwerpbeoordelingen en nauwe samenwerking noodzakelijk waren. Verantwoordelijk voor de technische implementatie en uitvoering.'
				},
				{
					id: '2',
					description:
						'Deployen van de applicatie naar zowel test, acceptatie als productie middels CI/CD.'
				},
				{
					id: '3',
					description:
						'  Plannen, uitvoeren en volledig verantwoordelijk voor het bereiken van volledige WCAG 2.1 (toegankelijkheid) conformiteit.'
				}
			],
			skills:
				'React.JS, TypeScript, Redux, SASS, REST, Spring Boot, Java, Cypress.io, WCAG, Jira, Git',
			technologies: 'Auth0, AWS S3'
		},
		{
			id: 3,
			title: 'Front-end developer/consultant bij Incentro, Amsterdam',
			logo: {
				src: './incentro.png',
				alt: 'Incentro'
			},
			startYear: '2018',
			startMonth: 'September',
			endYear: '2023',
			endMonth: 'Augustus',
			description:
				'Werkzaam voor grote klanten (KPN, GrandVision) als front-end ontwikkelaar consultant. Ik heb nog nooit een maand gehad waarin ik niet factureerbaar was.',
			tasks: [
				{
					id: '1',
					description:
						'Vertegenwoordigde Incentro als toegankelijkheidsexpert en stelde een nieuwe set van commerciële producten op als nieuwe propositie. Onderhandelde en hielp nieuwe en bestaande klanten bij het bereiken van hun toegankelijkheidsdoelen via workshops, verkooppresentaties en op maat gemaakte producten.'
				},
				{
					id: '2',
					description:
						'Field manager, collegas gemanaged en begeleid om persoonlijke en bedrijfsgerelateerde doelen te bereiken.'
				},
				{
					id: '3',
					description:
						'Actief betrokken bij de organisatie van onze front-end community en het uitvoeren van kennisdeling binnen de vestiging.'
				}
			],
			skills: 'React.JS, TypeScript, SASS, REST, Spring Boot, Java, Cypress.io, WCAG, Jira, Git',
			technologies: 'Auth0, AWS S3'
		},
		{
			id: 4,
			title: 'Assistent-manager bij Tomaz, Amsterdam',
			startYear: '2014',
			startMonth: 'Oktober',
			endYear: '2018',
			endMonth: 'Februari',
			description:
				'Werkzaam bij een drukbezocht internationaal restaurant in hartje Amsterdam. Ik was verantwoordelijk voor de dagelijkse aansturing van het team, oplossen van (ad-hoc) problemen en het naadloos laten verlopen van de taken gedurende de dag.'
		}
	];
</script>

<div class="flex flex-col md:flex-row">
	<div class="w-full md:w-1/3 mr-6">
		<!-- Single column spanning the top -->
		<div class="w-1/2 md:w-full mb-4 border border-indigo-500 mb-4 rounded">
			<img src="pictures/main_cv.jpg" alt="Wendy" />
		</div>
		<p class="font-bold text-gray-700 text-lg">
			Wendy van Epen <br />
			Front-end developer
		</p>
		<hr class="w-48 h-1 my-3 bg-indigo-700" />
		<p class="text-gray-500 text-sm">
			Gepassioneerde, energieke, vrolijke, leergierige front-end ontwikkelaar die graag de kar
			trekt. Ik kom het beste tot mijn recht wanneer ik technisch betrokken mag zijn bij het
			vormgeven van de allerbeste klantbelevingen van A-Z. Ik heb me gespecialiseerd in digitale
			toegankelijkheid en beschik over het implementeren van de WCAG richtlijnen.
		</p>

		<hr class="w-48 h-1 my-3 bg-indigo-700" />

		<p class="font-bold text-gray-700 text-lg">Persoonlijke gegevens</p>
		<ul class="text-sm list-disc pl-4">
			<li>Geboortedatum: 23-05-1993</li>
			<li>Nationaliteit: Nederlands</li>
			<li>Rijbeijws: Yes</li>
			<li>Hobbies: Surfen, snowboarden, de wereld rondreizen, fitness.</li>
		</ul>

		<hr class="w-48 h-1 my-3 bg-indigo-700" />

		<p class="font-bold text-gray-700 text-lg">Vaardigheden</p>
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

		<hr class="w-48 h-1 my-3 bg-indigo-700" />

		<p class="font-bold text-gray-700 text-lg">Opleidingen</p>
		<ul class="text-sm list-disc pl-4">
			<li>
				Amsterdam University of Applied Sciences, Bachelor Software Engineering <br />
				september 2018 – december 2019 <br />
				Intensief 1-jarig omscholingsprogramma dat de 4-jarige bacheloropleiding verkort tot een jaar.
			</li>
			<li>
				Amsterdam University of Applied Sciences, Bachelor Sports, Management & Business<br />
				september 2010 – december 2014<br />
				Minor Cross Cultural Business Skills.<br />
				Lid van de onderwijscommissie en secretaris van de activiteitencommissie.
			</li>
		</ul>

		<hr class="w-48 h-1 my-3 bg-indigo-700" />

		<p class="font-bold text-gray-700 text-lg">Cursussen</p>
		<ul class="text-sm list-disc pl-4">
			<li>
				W3C-WAI Certificate for Web Accessibility, edX<br />
				januari 2022
			</li>
			<li>
				User Experience (UX), BCS Foundation <br />
				september 2021
			</li>
			<li>
				Advanced Bloomreach CMS, Bloomreach <br />
				september 2018 – december 2018
			</li>
		</ul>
	</div>

	<div class="w-full">
		<div class="flex flex-col">
			{#each items as item (item.id)}
				<!-- Title -->
				<div class="w-full md:w-4/5 p-4 border border-indigo-500 mb-4 rounded">
					<div class="flex items-center">
						{#if item.logo}
							<img class="w-10 mr-2" src={item.logo.src} alt={item.logo.alt} />
						{/if}
						<h2 class="text-mb font-semibold mb-2 justify-center">{item.title}</h2>
					</div>

					<hr class="w-full h-1 my-3 bg-indigo-700" />

					<!-- Start Year + Month - End Year + Month -->
					<p class="text-sm text-gray-500">
						{item.startMonth}
						{item.startYear} - {item.endMonth}
						{item.endYear}
					</p>

					<!-- Description -->
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
							<span class="font-bold text-bold">Skills:</span>
							<span>{item.skills}</span>
						</p>
						<p class="text-sm">
							<span class="font-bold text-bold">Technologies:</span>
							<span>{item.technologies}</span>
						</p>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</div>
