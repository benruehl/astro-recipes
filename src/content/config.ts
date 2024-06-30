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
            key: z.enum([
                "apple",
                "aubergine",
                "butter",
                "cayenne",
                "chili",
                "creme-vega",
                "vinegar",
                "spring-onion",
                "lime-juice",
                "lime-zest",
                "corn",
                "mayonnaise",
                "miso",
                "honey",
                "carrot",
                "chickpeas",
                "garlic",
                "garlic-powder",
                "koriander",
                "cumin",
                "turmeric",
                "oil",
                "paprika",
                "pepper",
                "salt",
                "chives",
                "pointed-cabbage",
                "tahini",
                "cinnamon",
                "sugar"
            ]),
            amount: z.string().optional(),
        })),
        source: z.string().optional(),
    }),
});

export const collections = {
    'recipes': recipeCollection,
};
