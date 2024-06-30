import { z, defineCollection } from 'astro:content';

const recipeCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        subtitle: z.string(),
        image: image(),
        category: z.enum(["SideDish", "Salad", "Dressing"]),
        totalTime: z.string(),
        ingredients: z.array(z.object({
            name: z.enum([
                "Apfel",
                "Aubergine",
                "Butter",
                "Chili",
                "Creme Vega",
                "Essig",
                "Frühlingszwiebel",
                "Limettensaft",
                "Limettenschale",
                "Maiskolben",
                "Mayonnaise",
                "Misopaste",
                "Honig",
                "Karotte",
                "Knoblauch",
                "Knoblauchpulver",
                "Koriander",
                "Öl",
                "Salz",
                "Schnittlauch",
                "Spitzkohl",
                "Zucker"
            ]),
            amount: z.string().optional(),
        })),
        source: z.string().optional(),
    }),
});

export const collections = {
    'recipes': recipeCollection,
};
