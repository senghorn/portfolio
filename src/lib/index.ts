import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import type { BlogMetaData } from '$lib/types';
import { formatDistanceToNow } from 'date-fns';

export const getAllBlogs = async () => {
	const directoryPath = path.resolve('src', 'resources', 'blogs');
	try {
		const files = await fs.readdir(directoryPath);
		const blogs = await Promise.all(
			files
				.filter((file) => file.endsWith('.svx'))
				.map(async (file) => {
					const filePath = path.join(directoryPath, file);
					const fileContent = await fs.readFile(filePath, 'utf8');
					const { data } = matter(fileContent);

					const timeAgo = formatDistanceToNow(new Date(data.date), { addSuffix: true });
		
					const blog: BlogMetaData = {
						title: data.title,
						description: data.description,
						tag: data.tag,
						slug: file.replace('.svx', ''),
						tagColor: data.tagColor,
						imageUrl: data.imageUrl,
						author: data.author,
						timeAgo: timeAgo
					};

					return blog;
				})
		);

		return blogs;
	} catch (error) {
		console.error(error);
		return [];
	}
};

export const getBlog = async (slug: string) => {
    const directoryPath = path.resolve('src', 'resources', 'blogs', `${slug}.svx`);
    try {
        const content = await fs.readFile(directoryPath, 'utf-8');
        return content;
    } catch (error) {
        console.error(error);
        return null;
    }
};