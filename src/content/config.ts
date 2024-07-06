import { z, defineCollection } from 'astro:content';

const recipeCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        subtitle: z.string(),
        image: image(),
        category: z.enum(["SideDish", "Salad", "Dressing"]),
        totalTime: z.string(),
        source: z.string().optional(),
        ingredients: z.array(z.object({
            key: z.enum([
                "almonds",
                "apple",
                "aubergine",
                "avocado",
                "bell-pepper",
                "butter",
                "carrot",
                "cayenne",
                "chickpeas",
                "chili",
                "chili-flakes",
                "chipotle-paste",
                "chives",
                "cinnamon",
                "corn",
                "creme-vega",
                "cumin",
                "garlic",
                "garlic-powder",
                "honey",
                "jalapeno",
                "koriander",
                "lime-juice",
                "lime-zest",
                "mango",
                "mayonnaise",
                "mirin",
                "miso",
                "oil",
                "onion",
                "pak-choi",
                "paprika",
                "pepper",
                "pointed-cabbage",
                "salt",
                "sesame-oil",
                "soy-sauce",
                "spring-onion",
                "sugar",
                "sun-dried-tomatoes",
                "tahini",
                "tomato",
                "turmeric",
                "vinegar",
            ]),
            amount: z.string().optional(),
        })),
    }),
});

export const collections = {
    'recipes': recipeCollection,
};
