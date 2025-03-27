export const Direction = {
	LEFT: 'left',
	UP: 'up',
	DOWN: 'down',
	RIGHT: 'right'
} as const;

export type Direction = (typeof Direction)[keyof typeof Direction];
