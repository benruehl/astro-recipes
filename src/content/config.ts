import { z, defineCollection } from 'astro:content';

const recipeCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        image: image(),
        ingredients: z.array(z.string()),
        source: z.string().optional(),
    }),
});

export const collections = {
    'recipes': recipeCollection,
};
