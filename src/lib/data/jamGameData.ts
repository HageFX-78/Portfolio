import type { WindowContent } from '../components/Types/WindowContent';
import type { ProjectData } from '$lib/components/Types/ProjectData';

import Hazepoint from '../components/ProjectDetails/Games/Hazepoint.svelte';

export const hazepointProps: WindowContent = {
	projectLogo: 'images/normalgames/hazepoint/logo.png',
	projectVideo:
		'<iframe width="560" height="315" src="https://www.youtube.com/embed/J2Dco_VgSQA?si=AFvXABkIL8BFyVlF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
	projectItchLink:
		'<iframe frameborder="0" src="https://itch.io/embed/2209420?border_width=5&amp;bg_color=000000&amp;fg_color=d6d6d6&amp;link_color=00f2df&amp;border_color=537775" width="560" height="175"><a href="https://uowmgames.itch.io/fyp2-hazepoint">Hazepoint by UOWM Game Development, HageFX78</a></iframe>'
};

export const jamData: ProjectData[] = [
	{
		projectTitle: 'Hazepoint',
		image: 'images/normalgames/hazepoint/tn.png',
		backimage: 'images/normalgames/hazepoint/promotional_art_nologo.png',
		summary:
			'3D Thriller FPS game where you hunt down a towering kaiju in an old skirmish-use mech.',
		tags: ['Unreal 5', 'C++', 'Blueprint', 'Solo'],
		svelteComponent: Hazepoint,
		itchLink: 'https://uowmgames.itch.io/fyp2-hazepoint'
	}
];
