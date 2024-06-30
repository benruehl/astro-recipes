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
                "Cayenne",
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
                "Kichererbsen",
                "Knoblauch",
                "Knoblauchpulver",
                "Koriander",
                "Kreuzkümmel",
                "Kurkuma",
                "Öl",
                "Paprikapulver",
                "Pfeffer",
                "Salz",
                "Schnittlauch",
                "Spitzkohl",
                "Tahini",
                "Zimt",
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
