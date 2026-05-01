// Homepage testimonial list, rendered by `src/components/Testimonials.astro`.
//
// File layout: each entry's video and cover live under
//   /public/testimonials/homepage/<slug>/{video.mp4, cover.png}
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
	{ name: '', title: '', location: '', videoUrl: '/testimonials/homepage/elizabeth/video.mp4',  thumbnailUrl: '/testimonials/homepage/elizabeth/cover.png' },
	{ name: '', title: '', location: '', videoUrl: '/testimonials/homepage/erin/video.mp4',       thumbnailUrl: '/testimonials/homepage/erin/cover.png' },
	{ name: '', title: '', location: '', videoUrl: '/testimonials/homepage/isabela-1/video.mp4',  thumbnailUrl: '/testimonials/homepage/isabela-1/cover.png' },
	{ name: '', title: '', location: '', videoUrl: '/testimonials/homepage/isabela-2/video.mp4',  thumbnailUrl: '/testimonials/homepage/isabela-2/cover.png' },
	{ name: '', title: '', location: '', videoUrl: '/testimonials/homepage/jacob/video.mp4',      thumbnailUrl: '/testimonials/homepage/jacob/cover.png' },
	{ name: '', title: '', location: '', videoUrl: '/testimonials/homepage/jessica-1/video.mp4',  thumbnailUrl: '/testimonials/homepage/jessica-1/cover.png' },
	// jessica-2 cover is missing on disk; falling back to jessica-1's cover until a dedicated cover lands.
	{ name: '', title: '', location: '', videoUrl: '/testimonials/homepage/jessica-2/video.mp4',  thumbnailUrl: '/testimonials/homepage/jessica-1/cover.png' },
	{ name: '', title: '', location: '', videoUrl: '/testimonials/homepage/katrina/video.mp4',    thumbnailUrl: '/testimonials/homepage/katrina/cover.png' },
	{ name: '', title: '', location: '', videoUrl: '/testimonials/homepage/tom-taylor/video.mp4', thumbnailUrl: '/testimonials/homepage/tom-taylor/cover.png' },
	{ name: '', title: '', location: '', videoUrl: '/testimonials/homepage/wendy-1/video.mp4',    thumbnailUrl: '/testimonials/homepage/wendy-1/cover.png' },
	{ name: '', title: '', location: '', videoUrl: '/testimonials/homepage/wendy-2/video.mp4',    thumbnailUrl: '/testimonials/homepage/wendy-2/cover.png' },
];
