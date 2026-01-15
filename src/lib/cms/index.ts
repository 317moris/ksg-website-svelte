import { createClient, type MicroCMSQueries } from 'microcms-js-sdk';
import type { Post } from '../../interfaces/post';
import { MICROCMS_API_KEY } from '$env/static/private';

const client = createClient({
	serviceDomain: 'ksg',
	apiKey: MICROCMS_API_KEY!
});

export async function getPosts(queries?: MicroCMSQueries) {
	return await client.getList<Post>({ endpoint: 'news', queries: { ...queries } });
}
