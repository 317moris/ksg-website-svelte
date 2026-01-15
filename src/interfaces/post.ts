export interface Post {
	title: string;
	subtitle?: string;
}

export interface PostWithContent extends Post {
	content: string;
}
