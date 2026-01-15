import { createClient, type MicroCMSQueries } from 'microcms-js-sdk';
import type { Post } from '../../interfaces/post';

const client = createClient({
	serviceDomain: 'ksg',
	apiKey: process.env.MICROCMS_API_KEY!
});

export async function getPosts(queries?: MicroCMSQueries) {
	return await client.getList<Post>({ endpoint: 'news', queries: { ...queries } });
}
