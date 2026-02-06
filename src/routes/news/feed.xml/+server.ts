import { Feed } from 'feed';
import type { RequestHandler } from './$types';
import { getPosts } from '$lib/scraper';

export const GET: RequestHandler = async () => {
	const baseUrl = 'https://ksg-h.spec.ed.jp';

	const feed = new Feed({
		title: '埼玉県立越谷総合技術高等学校 (非公式)',
		link: baseUrl
	});

	const posts = await getPosts();

	for (const post of posts) {
		feed.addItem({
			title: post.title,
			link: post.link,
			author: [{ name: post.author }],
			date: new Date(post.publishedAt),
			content: post.content
		});
	}

	return new Response(feed.rss2(), { headers: { 'content-type': 'application/xml' } });
};
