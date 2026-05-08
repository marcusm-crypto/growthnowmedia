// Homepage testimonial list, rendered by `src/components/Testimonials.astro`.
//
// File layout: each entry's video and cover live under
//   /public/testimonials/homepage/<slug>/{video.mp4, cover.png}
//
// Slug naming convention: folders use their natural slug (e.g. `jacob`,
// `wendy-1`). Second testimonials from the same person are prefixed with
// `2-` (e.g. `2-wendy`) so they sort separately in the file browser. The
// data array preserves that ordering: non-prefixed first (alphabetical),
// then 2-prefixed at the end (alphabetical).
//
// Note: there is intentionally no `erin` entry — only `2-erin`. The original
// `erin` testimonial was removed from the homepage; if you re-add it, drop a
// folder at `homepage/erin/` and add an entry in the non-prefixed block below.
//
// Advisor testimonials live in their own buckets and are loaded dynamically
// by the advisor detail pages (see src/pages/advisors/{nate,andrew}.astro):
//   /public/testimonials/nate/<slug>/{video.mp4, cover.png}
//   /public/testimonials/andrew/<slug>/{video.mp4, cover.png}
//
// TODO: populate name/title/location for each entry before launch.

export type Testimonial = {
	name: string;
	title: string;
	location: string;
	videoUrl: string;
	thumbnailUrl: string;
};

export const testimonials: Testimonial[] = [
	// Pinned to first slot — appears as the lead card on the homepage grid.
	{ name: '', title: '', location: '', videoUrl: '/testimonials/homepage/1-tracy/video.mp4',    thumbnailUrl: '/testimonials/homepage/1-tracy/cover.png' },
	{ name: '', title: '', location: '', videoUrl: '/testimonials/homepage/elizabeth/video.mp4',  thumbnailUrl: '/testimonials/homepage/elizabeth/cover.png' },
	{ name: '', title: '', location: '', videoUrl: '/testimonials/homepage/isabela-1/video.mp4',  thumbnailUrl: '/testimonials/homepage/isabela-1/cover.png' },
	{ name: '', title: '', location: '', videoUrl: '/testimonials/homepage/jacob/video.mp4',      thumbnailUrl: '/testimonials/homepage/jacob/cover.png' },
	{ name: '', title: '', location: '', videoUrl: '/testimonials/homepage/jessica-1/video.mp4',  thumbnailUrl: '/testimonials/homepage/jessica-1/cover.png' },
	{ name: '', title: '', location: '', videoUrl: '/testimonials/homepage/katrina/video.mp4',    thumbnailUrl: '/testimonials/homepage/katrina/cover.png' },
	{ name: '', title: '', location: '', videoUrl: '/testimonials/homepage/tom-taylor/video.mp4', thumbnailUrl: '/testimonials/homepage/tom-taylor/cover.png' },
	{ name: '', title: '', location: '', videoUrl: '/testimonials/homepage/tracy/video.mp4',      thumbnailUrl: '/testimonials/homepage/tracy/cover.png' },
	{ name: '', title: '', location: '', videoUrl: '/testimonials/homepage/wendy-1/video.mp4',    thumbnailUrl: '/testimonials/homepage/wendy-1/cover.png' },
	// Second testimonials from the same person — sorted to the end so file
	// browser ordering and on-page ordering both group them visually.
	{ name: '', title: '', location: '', videoUrl: '/testimonials/homepage/2-erin/video.mp4',     thumbnailUrl: '/testimonials/homepage/2-erin/cover.png' },
	{ name: '', title: '', location: '', videoUrl: '/testimonials/homepage/2-isabela/video.mp4',  thumbnailUrl: '/testimonials/homepage/2-isabela/cover.png' },
	{ name: '', title: '', location: '', videoUrl: '/testimonials/homepage/2-jessica/video.mp4',  thumbnailUrl: '/testimonials/homepage/2-jessica/cover.png' },
	{ name: '', title: '', location: '', videoUrl: '/testimonials/homepage/2-katrina/video.mp4',  thumbnailUrl: '/testimonials/homepage/2-katrina/cover.png' },
	{ name: '', title: '', location: '', videoUrl: '/testimonials/homepage/2-wendy/video.mp4',    thumbnailUrl: '/testimonials/homepage/2-wendy/cover.png' },
];
