import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const caseStudies = defineCollection({
	loader: glob({ pattern: '*.md', base: './src/content/caseStudies' }),
	schema: z.object({
		clinicName: z.string(),
		slug: z.string(),
		location: z.string(),
		deviceType: z.string(),
		timeframe: z.string(),
		headlineStat: z.string(),
		stats: z.array(
			z.object({
				label: z.string(),
				value: z.string(),
				timeframe: z.string(),
			}),
		),
		published: z.boolean(),
		// Optional explicit path to the downloadable case study PDF. When omitted,
		// the page auto-detects public/case-studies/pdfs/<slug>.pdf if that file exists.
		pdf: z.string().optional(),
		quote: z
			.object({
				text: z.string(),
				attribution: z.string(),
				role: z.string(),
			})
			.optional(),
	}),
});

export const collections = { caseStudies };
