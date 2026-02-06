import { TZDate } from '@date-fns/tz';
import { HTMLAnchorElement, Window } from 'happy-dom';

const baseUrl = 'https://ksg-h.spec.ed.jp';

export async function getPosts() {
	const window = new Window();
	const homePage = await fetch(baseUrl).then((res) => res.text());
	window.document.body.innerHTML = homePage;

	const postsA = window.document.querySelector(
		'span.btn-group:nth-child(2) > ul:nth-child(2) > li:nth-child(6) > a:nth-child(1)'
	);
	if (!postsA) throw new Error('not found "100件"');
	if (!(postsA instanceof HTMLAnchorElement)) throw new Error('not anchor');

	const postsPage = await fetch(`${baseUrl}${postsA.href}`).then((res) => res.text());
	window.document.body.innerHTML = postsPage;

	const articles = window.document.querySelector(
		'article.blogEntries div.nc-content-list'
	)?.children;
	if (!articles) throw new Error('not found articles');

	const data = [];
	for (const article of articles) {
		if (article.tagName !== 'ARTICLE') continue;
		const titleA = article.querySelector('h2.blogs_entry_title a');
		if (!titleA) throw new Error('not found title');
		if (!(titleA instanceof HTMLAnchorElement)) throw new Error('not anchor');
		const title = titleA.textContent;
		const link = `${baseUrl}${titleA.href}`;
		const meta = article.querySelector('div.blogs_entry_meta div');
		if (!meta) throw new Error('not found meta');
		const author = meta.querySelector('a')?.textContent.trim();
		const publishedAt = meta.textContent.match(/\d{4}\/\d{2}\/\d{2}|\d{2}\/\d{2}/)?.at(0);
		if (!publishedAt) throw new Error('not found published-at');
		const body = article.querySelector('div.blogs_entry_body1');
		if (!body?.innerHTML) throw new Error('not found body');
		const content = body.innerHTML.trim();

		data.push({
			title,
			link,
			author,
			publishedAt: new TZDate(
				`${publishedAt.split('/').length === 2 ? `${new TZDate(new Date(), 'Asia/Tokyo').getFullYear()}/` : ''}${publishedAt}`,
				'Asia/Tokyo'
			).getTime(),
			content
		});
	}

	return data;
}
