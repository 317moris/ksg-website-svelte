import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ setHeaders }) => {
	setHeaders({ 'cache-control': 'max-age=120, stale-while-revalidate=10800, public' });
};
