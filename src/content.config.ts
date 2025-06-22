import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const recipeCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx,jpg,png}', base: "./src/content/recipes" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        subtitle: z.string(),
        tagline: z.string().optional(), // TODO: Make mandatory
        tags: z.array(z.string()).optional(),
        imageLayers: z.array(image()).optional(), // TODO: Make mandatory
        image: image(),
        category: z.enum(["SideDish", "Salad", "Dressing"]),
        totalTime: z.string(),
        diet: z.enum(["Vegetarian", "Vegan"]).optional(),
        source: z.string().optional(),
        background: z.object({
            startColor: z.string(),
            endColor: z.string()
        }).optional(),
        ingredients: z.array(z.object({
            key: z.enum([
                "almonds",
                "apple",
                "aubergine",
                "avocado",
                "bell-pepper",
                "broccoli",
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
                "cucumber",
                "cumin",
                "fish-sauce",
                "garlic",
                "garlic-powder",
                "gochugaru",
                "honey",
                "jalapeno",
                "koriander",
                "lime-juice",
                "lime-zest",
                "mango",
                "mayonnaise",
                "mirin",
                "miso",
                "mustard",
                "oil",
                "onion",
                "pak-choi",
                "paprika",
                "pepper",
                "pointed-cabbage",
                "salt",
                "sesame",
                "sesame-oil",
                "soy-sauce",
                "spring-onion",
                "sugar",
                "sun-dried-tomatoes",
                "tahini",
                "tomato",
                "turmeric",
                "vinegar",
                "yoghurt"
            ]),
            amount: z.string().optional(),
        })),
    }),
});

export const collections = {
    'recipes': recipeCollection,
};
