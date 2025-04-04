export function isMobile(): boolean {
	if (typeof window === 'undefined') return false;
	return window.innerWidth <= 768;
}

export function getFileName(url: string): string {
	return url.split('/').pop() || '';
}
