// Founders get full detail pages at /about/[slug] with gallery + testimonial video.
// Non-founders (isFounder: false) only appear on the team grid; no detail page.
//
// TODO: replace remaining placeholder names, bios, and photos before launch
// TODO: populate testimonials + testimonialVideo fields once founder media arrives

export const operators = [
	{
		name: 'Nate Fennell',
		slug: 'nate-fennell',
		role: 'Co-founder & Chief Operator',
		isFounder: true,
		photo: '/team/nate-fennell.jpg',
		bullets: [
			'20+ years in wellness, fitness, and longevity',
			'Founded multiple 7- and 8-figure companies',
			'Scaled brands to 30+ locations',
		],
		fullBio: [
			'Entrepreneur, growth strategist, and franchise advisor with 20+ years of experience building and scaling businesses in the wellness, fitness, and longevity space. He has founded and led multiple 7- and 8-figure companies, generating tens of millions in revenue and expanding to 30+ locations.',
			'With deep expertise in multi-unit growth, franchise development, and go-to-market strategy, Nate has helped scale high-growth brands and advises operators on sales, marketing, and unit economics. Through Growth Now Advisors, he helps entrepreneurs launch and grow scalable, profitable businesses with real-world execution and strategic clarity.',
		],
		testimonials: [],
		videoTestimonials: [],
	},
	{
		name: 'Andrew Sousa',
		slug: 'andrew-sousa',
		role: 'Co-founder & Head of Growth',
		isFounder: true,
		photo: '/team/andrew-sousa.jpg',
		bullets: [
			'$50M+ in managed ad spend across wellness',
			'10+ years scaling paid acquisition',
			'Specialty: Google, Meta, and YouTube',
		],
		fullBio: [
			"Entrepreneur, growth strategist, and operator who has helped scale over 500 wellness brands and franchises, generating $26M+ in client revenue and expanding concepts to 150+ locations nationwide. With a background that includes a successful agency exit, he's known for turning inconsistent pipelines into predictable, scalable growth systems.",
			'As the founder of Growth Now Media, Andrew leads a performance-driven team that integrates paid traffic, appointment setting, sales training, CRM automation, and operations into one unified system—helping multi-location businesses drive consistent bookings, higher conversions, and scalable revenue growth.',
		],
		testimonials: [],
		videoTestimonials: [],
	},
	{
		name: 'Anna Rosales',
		slug: null,
		role: 'Technical Specialist',
		isFounder: false,
		photo: '/team/anna-rosales.jpg',
		bullets: [
			'Systems and automation specialist',
			'Designs lead capture, follow-up, and booking conversion processes',
			'Specialty: performance and conversion optimization',
		],
		fullBio: [
			'A systems and automation specialist focused on optimizing performance and conversion. With a strong emphasis on efficiency and innovation, they design and refine processes that ensure every lead is captured, properly followed up, and converted into booked appointments and measurable revenue.',
		],
		testimonials: [],
		videoTestimonials: [],
	},
	{
		name: 'Christy Escarcida',
		slug: null,
		role: 'Operations Manager',
		isFounder: false,
		photo: '/team/christy-escarcida.jpg',
		bullets: [
			'Daily operations and team performance lead',
			'Internal process and workflow design',
			'Specialty: structure, alignment, and execution',
		],
		fullBio: [
			'She ensures the seamless flow of daily operations, overseeing team performance, refining internal processes, and upholding the highest standards of service delivery. Behind the scenes, she keeps every moving part aligned so the operation runs smoothly and clients consistently achieve exceptional results.',
			"She thrives in bringing structure to complexity — streamlining workflows, maintaining strong team alignment, and ensuring no detail is ever overlooked. For her, it's all about precision, execution, and consistency, because when operations are fully optimized, clients can see and feel it in their results.",
		],
		testimonials: [],
		videoTestimonials: [],
	},
	{
		name: 'Michelle Steenkamp',
		slug: null,
		role: 'Account Manager & Team Lead',
		isFounder: false,
		photo: '/team/michelle-steenkamp.jpg',
		bullets: [
			'Account management and team leadership',
			'Owns full client journey end-to-end',
			'Specialty: client relationships and team development',
		],
		fullBio: [
			'Michelle Steenkamp is an Account Manager and Team Lead at Growth Now Media, known for building strong client relationships that drive real results. She manages the full client journey — from initial engagement to delivering measurable value and growth.',
			'As a team leader, Michelle focuses on developing her team through clear communication, support, and consistency, helping them build confidence, sharpen their skills, and achieve lasting success.',
		],
		testimonials: [],
		videoTestimonials: [],
	},
];
