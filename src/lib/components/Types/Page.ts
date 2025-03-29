export const Page = {
	HOME: 'home',
	GAMES: 'games',
	TOOLS: 'tools',
	ABOUTME: 'aboutme'
} as const;

export type Page = (typeof Page)[keyof typeof Page];
