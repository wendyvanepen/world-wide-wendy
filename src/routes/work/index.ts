import nl from './translations/nl.json';
import en from './translations/en.json';

export interface CvInfo {
	intro: string;
	infoTitle: string;
	info: {
		dateOfBirth: string;
		nationality: string;
		license: string;
		hobbies: string;
	};
	skillsTitle: string;
	educationTitle: string;
	education: Array<{
		id: string;
		school: string;
		date: string;
		description: string;
	}>;
	courseTitle: string;
	courses: Array<{
		id: string;
		title: string;
		date: string;
		description: string;
	}>;
	items: Array<{
		id: number;
		title: string;
		logo: {
			src: string;
			alt: string;
		};
		startYear: string;
		startMonth: string;
		endYear: string;
		endMonth: string;
		description: string;
		tasks: Array<{
			id: string;
			description: string;
		}>;
		skills: string;
		technologies: string;
	}>;
}

export const translations = {
	en,
	nl
};
