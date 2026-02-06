import { getPosts } from '$lib/scraper';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => ({ posts: await getPosts() });
