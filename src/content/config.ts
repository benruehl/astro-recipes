import { z, defineCollection } from 'astro:content';

const recipeCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        subtitle: z.string(),
        image: image(),
        category: z.enum(["SideDish", "Salad", "Dressing"]),
        totalTime: z.string(),
        ingredients: z.array(z.string()),
        source: z.string().optional(),
    }),
});

export const collections = {
    'recipes': recipeCollection,
};
