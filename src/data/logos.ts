// Client logos rendered in the LogoWall marquee.
// Each entry is a filename inside /public/logos/.
//
// File handling:
//   - .svg files render as pure-white silhouettes via CSS filter
//     (brightness(0) invert(1) — works on any source SVG color)
//   - .png files must be pre-processed to white-on-transparent before
//     being placed in /public/logos/ (no CSS filter is applied).
//     If a PNG appears in its source colors instead of white,
//     the source PNG needs re-processing to white-on-transparent.

export const logos: string[] = [
	'logos-1.png',
	'logos-2.png',
	'logos-3.png',
	'logos-4.png',
	'logos-5.png',
	'logos-6.png',
	'logos-7.png',
	'logos-8.png',
	'logos-9.png',
	'logos-10.png',
	'logos-11.png',
	'logos-12.png',
	'logos-13.png',
	'logos-14.png',
	'logos-16.svg',
	'logos-17.svg',
	'logos-18.svg',
	'logos-19.svg',
	'logos-20.svg',
	'logos-21.svg',
	'logos-22.svg',
	'logos-23.svg',
	'logos-24.svg',
	'logos-25.svg',
	'logos-26.svg',
	'logos-27.svg',
	'logos-28.svg',
	'logos-29.svg',
	'logos-30.svg',
	'logos-31.svg',
	'logos-32.svg',
	'logos-33.svg',
];
