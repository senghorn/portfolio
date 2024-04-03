export const prerender = true;
import { getBlog } from '$lib';
/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const blog = await getBlog(params.slug);
    return {
        blog
    }
}
