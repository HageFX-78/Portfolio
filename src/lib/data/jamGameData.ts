import type { WindowContent } from '../components/Types/WindowContent';
import type { ProjectData } from '$lib/components/Types/ProjectData';

import Hazepoint from '../components/ProjectDetails/Games/Hazepoint.svelte';

export const hazepointProps: WindowContent = {
	projectLogo: 'images/normalgames/hazepoint/logo.png',
	projectVideo: '',
	projectItchLink: '',
	projectBackdrop: 'images/normalgames/hazepoint/promotional_art_nologo.png'
};

export const jamData: ProjectData[] = [
	{
		projectTitle: 'Touhou Scarlet Dreamer',
		image: 'images/jams/ScarletDreamer/tn.png',
		backimage: 'images/jams/ScarletDreamer/back.gif',
		summary: 'First person beat-em-up as Meiling from Touhou',
		tags: ['Unity', 'C#', 'Group', 'Touhou Jam 14'],
		svelteComponent: Hazepoint,
		itchLink: 'https://hagefx78.itch.io/scarlet-dreamer'
	},
	{
		projectTitle: 'Touhou KAPPA OS',
		image: 'images/jams/KappaOS/tn.png',
		backimage: 'images/jams/KappaOS/back.gif',
		summary:
			"A simulation clicker where you hijack Reimu's stream causing havoc. Warning it's in JAPANESE only as it's made for a japanese jam",
		tags: ['Unity', 'C#', 'Solo', 'Touhou Station Jam 2024'],
		svelteComponent: Hazepoint,
		itchLink: 'https://hagefx78.itch.io/touhou-kappaos'
	},
	{
		projectTitle: 'Blackout Protocol',
		image: 'images/jams/BlackoutProtocol/tn.png',
		backimage: 'images/jams/BlackoutProtocol/back.gif',
		summary:
			'Winner of Sea Game Jam 2024! Top-down 2D horror survival game where you play as a robot',
		tags: ['Unity', 'C#', 'Group', 'Sea Game Jam 2024'],
		svelteComponent: Hazepoint,
		itchLink: 'https://justinooncx.itch.io/blackout-protocol'
	},
	{
		projectTitle: "Berry's Under Belly",
		image: 'images/jams/BerryUnderBelly/tn.png',
		backimage: 'images/jams/BerryUnderBelly/back.png',
		summary: 'Feed your new adopted cat Berry and bond with her!',
		tags: ['Unity', 'C#', 'Group', 'Micro Jam 026'],
		svelteComponent: Hazepoint,
		itchLink: 'https://alexmah.itch.io/under-belly'
	},
	{
		projectTitle: 'Gastric Buster',
		image: 'images/jams/GastricBuster/tn.png',
		backimage: 'images/jams/GastricBuster/back.png',
		summary: 'A bullet hell where you play as an medicine tasked to cleanse  the acidic bubbles.',
		tags: ['Unity', 'C#', 'Group', 'Global Game Jam 2025'],
		svelteComponent: Hazepoint,
		itchLink: 'https://alexmah.itch.io/gastric-buster'
	},
	{
		projectTitle: 'Keep It Off',
		image: 'images/jams/KeepItOff/tn.png',
		backimage: 'images/jams/KeepItOff/back.png',
		summary: "Don't turn the car lights on while your dad is driving! A simple horror game.",
		tags: ['Unity', 'C#', 'Group', 'Indie Jam 2024'],
		svelteComponent: Hazepoint,
		itchLink: 'https://alexmah.itch.io/keepitoff'
	},
	{
		projectTitle: 'Planetary Decay',
		image: 'images/jams/PlanetaryDecay/tn.png',
		backimage: 'images/jams/PlanetaryDecay/back.gif',
		summary:
			'An unfinished game wh0ere you determine whether a planet is decaying and save them...?',
		tags: ['Unity', 'C#', 'Solo', 'Djam 8'],
		svelteComponent: Hazepoint,
		itchLink: 'https://hagefx78.itch.io/planatary-decay'
	},

	{
		projectTitle: 'Blood Drive',
		image: 'images/jams/BloodDrive/tn.png',
		backimage: 'images/jams/BloodDrive/back.png',
		summary: 'Top down management game where you defend your employees while fending off vampires.',
		tags: ['Unity', 'C#', 'Group', 'Micro Jam 025'],
		svelteComponent: Hazepoint,
		itchLink: 'https://alexmah.itch.io/blooddrive'
	}
];
