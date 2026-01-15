import { resolve } from '$app/paths';
import type { PageType } from '../../interfaces/page';

export const Pages: PageType[] = [
	{
		label: 'お知らせ',
		href: resolve('/news')
	}
];
