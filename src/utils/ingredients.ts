
import type { CollectionEntry } from 'astro:content';

type Recipe = CollectionEntry<'recipes'>;
type IngredientKey = Recipe["data"]["ingredients"][0]["key"];

interface IngredientMetadata {
    img: string;
    name: string;
    background: string;
}

const imageMap: { [id in IngredientKey ] : IngredientMetadata } = {
    "almonds": {
        img: "almonds.jpg",
        name: "Mandeln",
        background: "hsl(29, 47%, 94%)",
    },
    "apple": {
        img: "apple.jpg",
        name: "Apfel",
        background: "hsl(14, 80%, 94%)",
    },
    "aubergine": {
        img: "aubergine.jpg",
        name: "Aubergine",
        background: "hsl(27, 19%, 94%)",
    },
    "avocado": {
        img: "avocado.jpg",
        name: "Avocado",
        background: "hsl(65, 51%, 94%)",
    },
    "bell-pepper": {
        img: "bell-pepper.jpg",
        name: "Paprika",
        background: "hsl(0, 99%, 94%)",
    },
    "butter": {
        img: "butter.png",
        name: "Butter",
        background: "hsl(40, 60%, 94%)",
    },
    "carrot": {
        img: "carrot.png",
        name: "Karotte",
        background: "hsl(28, 95%, 94%)",
    },
    "cayenne": {
        img: "cayenne.png",
        name: "Cayenne",
        background: "hsl(5, 85%, 94%)",
    },
    "chickpeas": {
        img: "chickpeas.png",
        name: "Kichererbsen",
        background: "hsl(24, 70%, 94%)",
    },
    "chili": {
        img: "chili.png",
        name: "Chili",
        background: "hsl(5, 85%, 94%)",
    },
    "chili-flakes": {
        img: "chili-flakes.png",
        name: "Chiliflocken",
        background: "hsl(5, 85%, 94%)",
    },
    "chipotle-paste": {
        img: "chipotle-paste.png",
        name: "Chipotle Paste",
        background: "hsl(5, 85%, 94%)",
    },
    "chives": {
        img: "chives.jpg",
        name: "Schnittlauch",
        background: "hsl(102, 22%, 94%)",
    },
    "cinnamon": {
        img: "cinnamon.png",
        name: "Zimt",
        background: "hsl(28, 63%, 94%)",
    },
    "corn": {
        img: "corn.png",
        name: "Maiskolben",
        background: "hsl(41, 83%, 94%)",
    },
    "creme-vega": {
        img: "creme-vega.jpg",
        name: "Créme Vega",
        background: "hsl(51, 73%, 94%)",
    },
    "cumin": {
        img: "cumin.png",
        name: "Kreuzkümmel",
        background: "hsl(26, 27%, 94%)",
    },
    "garlic": {
        img: "garlic.jpg",
        name: "Knoblauch",
        background: "hsl(39, 51%, 94%)",
    },
    "garlic-powder": {
        img: "garlic-powder.png",
        name: "Knoblauchpulver",
        background: "hsl(39, 51%, 94%)",
    },
    "honey": {
        img: "honey.jpg",
        name: "Honig",
        background: "hsl(29, 68%, 94%)",
    },
    "jalapeno": {
        img: "jalapeno.jpg",
        name: "Jalapeño",
        background: "hsl(110, 29%, 94%)",
    },
    "koriander": {
        img: "koriander.png",
        name: "Koriander",
        background: "hsl(108, 67%, 94%)",
    },
    "lime-juice": {
        img: "lime.png",
        name: "Limettensaft",
        background: "hsl(86, 82%, 94%)",
    },
    "lime-zest": {
        img: "lime.png",
        name: "Limettenschale",
        background: "hsl(86, 82%, 94%)",
    },
    "mango": {
        img: "mango.avif",
        name: "Mango",
        background: "hsl(45, 92%, 94%)",
    },
    "mayonnaise": {
        img: "mayonnaise.png",
        name: "Mayonnaise",
        background: "hsl(49, 63%, 94%)",
    },
    "mirin": {
        img: "mirin.jpg",
        name: "Mirin ",
        background: "hsl(54, 89%, 94%)",
    },
    "miso": {
        img: "miso.png",
        name: "Misopaste",
        background: "hsl(39, 56%, 94%)",
    },
    "oil": {
        img: "oil.jpg",
        name: "Öl",
        background: "hsl(51, 80%, 94%)",
    },
    "onion": {
        img: "onion.jpg",
        name: "Zwiebel",
        background: "hsl(23, 22%, 94%)",
    },
    "pak-choi": {
        img: "pak-choi.png",
        name: "Pak-Choi",
        background: "hsl(86, 59%, 94%)",
    },
    "paprika": {
        img: "paprika.png",
        name: "Paprikapulver",
        background: "hsl(23, 100%, 94%)",
    },
    "pepper": {
        img: "pepper.jpg",
        name: "Pfeffer",
        background: "hsl(30, 33%, 94%)",
    },
    "pointed-cabbage": {
        img: "pointed-cabbage.png",
        name: "Spitzkohl",
        background: "hsl(73, 36%, 94%)",
    },
    "sesame-oil": {
        img: "oil.jpg",
        name: "Sesamöl",
        background: "hsl(51, 10%, 94%)",
    },
    "salt": {
        img: "salt.png",
        name: "Salz",
        background: "hsl(51, 10%, 94%)",
    },
    "soy-sauce": {
        img: "soy-sauce.jpg",
        name: "Sojasauce",
        background: "hsl(110, 29%, 94%)",
    },
    "spring-onion": {
        img: "spring-onion.png",
        name: "Lauchzwiebel",
        background: "hsl(110, 29%, 94%)",
    },
    "sugar": {
        img: "garlic-powder.png",
        name: "Zucker",
        background: "hsl(60, 10%, 94%)",
    },
    "sun-dried-tomatoes": {
        img: "sun-dried-tomatoes.png",
        name: "Sonnengetrocknete Tomaten",
        background: "hsl(21, 74%, 94%)",
    },
    "tahini": {
        img: "tahini.png",
        name: "Tahini",
        background: "hsl(42, 47%, 94%)",
    },
    "tomato": {
        img: "tomato.jpg",
        name: "Tomate",
        background: "hsl(8, 81%, 94%)",
    },
    "turmeric": {
        img: "turmeric.png",
        name: "Kurkuma",
        background: "hsl(35, 96%, 94%)",
    },
    "vinegar": {
        img: "vinegar.png",
        name: "Essig",
        background: "hsl(49, 94%, 94%)",
    },
};

export const mapIngredient = (ingredient: IngredientKey): IngredientMetadata => imageMap[ingredient];