export const prerender = true;
import { getAllBlogs } from '$lib';
/** @type {import('./$types').PageLoad} */
export async function load() {
	const blogs = await getAllBlogs();
	return {
		blogs
	};
}