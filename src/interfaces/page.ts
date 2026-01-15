import type { ResolvedPathname } from '$app/types';

export type PageType = {
	label: string;
	href: ResolvedPathname;
	children?: PageType[];
};
