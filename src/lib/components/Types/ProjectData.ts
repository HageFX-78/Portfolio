import type { Component } from 'svelte';

export type ProjectData = {
	projectTitle: string;
	image: string;
	backimage: string;
	gifbg: string;
	summary: string;
	tags: string[];
	svelteComponent: Component;
	itchLink: string;
};
