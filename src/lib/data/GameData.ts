import type { WindowContent } from '../components/Types/WindowContent';
import type { ProjectData } from '$lib/components/Types/ProjectData';

import Hazepoint from '../components/ProjectDetails/Games/Hazepoint.svelte';
import Shadow from '../components/ProjectDetails/Games/Shadow.svelte';
import GuiltTrip from '../components/ProjectDetails/Games/GuiltTrip.svelte';

export const hazepointProps: WindowContent = {
	projectLogo: 'images/normalgames/hazepoint/logo.png',
	projectVideo:
		'<iframe  src="https://www.youtube.com/embed/J2Dco_VgSQA?si=AFvXABkIL8BFyVlF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
	projectItchLink: 'https://uowmgames.itch.io/fyp2-hazepoint',
	projectBackdrop: 'images/normalgames/hazepoint/promotional_art_nologo.png'
};

export const shadowProps: WindowContent = {
	projectLogo: 'images/normalgames/shadow/logo.png',
	projectVideo:
		'<iframe width="560" height="315" src="https://www.youtube.com/embed/XefaRMtpqR4?si=FiAjMQ7RdRuhgMvR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
	projectItchLink: 'https://aarontan1.itch.io/shadow-maiden-less',
	projectBackdrop: 'images/normalgames/shadow/shadow4.png'
};

export const guiltTripProps: WindowContent = {
	projectLogo: 'images/normalgames/hazepoint/logo.png',
	projectVideo:
		'<iframe width="560" height="315" src="https://www.youtube.com/embed/etgTpAIKsto?si=q-LrCChLOiW9RqIx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
	projectItchLink: 'https://uowmgames.itch.io/guilt-trip',
	projectBackdrop: 'images/normalgames/guilttrip/g2.gif'
};

export const njGameData: ProjectData[] = [
	{
		projectTitle: 'Hazepoint',
		image: 'images/normalgames/hazepoint/tn.png',
		backimage: 'images/normalgames/hazepoint/g2.gif',
		summary:
			'3D Thriller FPS game where you hunt down a towering kaiju in an old skirmish-use mech.',
		tags: ['Unreal 5', 'C++', 'Blueprint', 'Solo'],
		svelteComponent: Hazepoint,
		itchLink: 'https://uowmgames.itch.io/fyp2-hazepoint'
	},
	{
		projectTitle: 'Shadow',
		image: 'images/normalgames/shadow/shadow1.png',
		backimage: 'images/normalgames/shadow/g2.gif',
		summary: 'Mobile 3D + 2D platformer where you can switch between both realms to solve puzzles.',
		tags: ['Unity', 'C#', 'Group', 'Tools'],
		svelteComponent: Shadow,
		itchLink: 'https://aarontan1.itch.io/shadow-maiden-less'
	},
	{
		projectTitle: 'Guilt Trip',
		image: 'images/normalgames/guilttrip/gt1.png',
		backimage: 'images/normalgames/guilttrip/g1.gif',
		summary: '2D Topdown turn-based RPG where you battle with emotions.',
		tags: ['Unity', 'C#', 'Group'],
		svelteComponent: GuiltTrip,
		itchLink: 'https://uowmgames.itch.io/guilt-trip'
	}
];
