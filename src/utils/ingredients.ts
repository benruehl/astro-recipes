
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
        img: "almonds.png",
        name: "Mandeln",
        background: "29, 47%",
    },
    "apple": {
        img: "apple.png",
        name: "Apfel",
        background: "14, 80%",
    },
    "aubergine": {
        img: "aubergine.png",
        name: "Aubergine",
        background: "27, 19%",
    },
    "avocado": {
        img: "avocado.png",
        name: "Avocado",
        background: "65, 51%",
    },
    "bell-pepper": {
        img: "bell-pepper.png",
        name: "Paprika",
        background: "0, 99%",
    },
    "butter": {
        img: "butter.png",
        name: "Butter",
        background: "40, 60%",
    },
    "broccoli": {
        img: "broccoli.png",
        name: "Brokkoli",
        background: "108, 35%",
    },
    "carrot": {
        img: "carrot.png",
        name: "Karotte",
        background: "28, 95%",
    },
    "cayenne": {
        img: "cayenne.png",
        name: "Cayenne",
        background: "5, 50%",
    },
    "chickpeas": {
        img: "chickpeas.png",
        name: "Kichererbsen",
        background: "24, 70%",
    },
    "chili": {
        img: "chili.png",
        name: "Chili",
        background: "5, 50%",
    },
    "chili-flakes": {
        img: "chili-flakes.png",
        name: "Chiliflocken",
        background: "5, 50%",
    },
    "chipotle-paste": {
        img: "chipotle-paste.png",
        name: "Chipotle Paste",
        background: "5, 50%",
    },
    "chives": {
        img: "chives.png",
        name: "Schnittlauch",
        background: "102, 22%",
    },
    "cinnamon": {
        img: "cinnamon.png",
        name: "Zimt",
        background: "28, 63%",
    },
    "corn": {
        img: "corn.png",
        name: "Maiskolben",
        background: "41, 83%",
    },
    "creme-vega": {
        img: "creme-vega.png",
        name: "Créme Vega",
        background: "51, 73%",
    },
    "cucumber": {
        img: "cucumber.png",
        name: "Gurke",
        background: "137, 81%",
    },
    "cumin": {
        img: "cumin.png",
        name: "Kreuzkümmel",
        background: "26, 27%",
    },
    "fish-sauce": {
        img: "soy-sauce.png",
        name: "Fischsauce",
        background: "26, 27%",
    },
    "garlic": {
        img: "garlic.png",
        name: "Knoblauch",
        background: "39, 51%",
    },
    "garlic-powder": {
        img: "garlic-powder.png",
        name: "Knoblauchpulver",
        background: "39, 51%",
    },
    "gochugaru": {
        img: "cayenne.png",
        name: "Gochugaru",
        background: "39, 51%",
    },
    "honey": {
        img: "honey.png",
        name: "Honig",
        background: "29, 68%",
    },
    "jalapeno": {
        img: "jalapeno.png",
        name: "Jalapeño",
        background: "110, 29%",
    },
    "koriander": {
        img: "koriander.png",
        name: "Koriander",
        background: "108, 67%",
    },
    "lime-juice": {
        img: "lime.png",
        name: "Limettensaft",
        background: "86, 82%",
    },
    "lime-zest": {
        img: "lime.png",
        name: "Limettenschale",
        background: "86, 82%",
    },
    "mango": {
        img: "mango.png",
        name: "Mango",
        background: "45, 92%",
    },
    "mayonnaise": {
        img: "mayonnaise.png",
        name: "Mayonnaise",
        background: "49, 63%",
    },
    "mirin": {
        img: "mirin.png",
        name: "Mirin ",
        background: "54, 89%",
    },
    "miso": {
        img: "miso.png",
        name: "Misopaste",
        background: "39, 56%",
    },
    "mustard": {
        img: "mustard.png",
        name: "Senf",
        background: "39, 56%",
    },
    "oil": {
        img: "oil.png",
        name: "Öl",
        background: "41, 74%",
    },
    "onion": {
        img: "onion.png",
        name: "Zwiebel",
        background: "23, 22%",
    },
    "pak-choi": {
        img: "pak-choi.png",
        name: "Pak-Choi",
        background: "86, 59%",
    },
    "paprika": {
        img: "paprika.png",
        name: "Paprikapulver",
        background: "23, 100%",
    },
    "pepper": {
        img: "pepper.png",
        name: "Pfeffer",
        background: "30, 33%",
    },
    "pointed-cabbage": {
        img: "pointed-cabbage.png",
        name: "Spitzkohl",
        background: "73, 36%",
    },
    "salt": {
        img: "salt.png",
        name: "Salz",
        background: "51, 10%",
    },
    "sesame": {
        img: "cumin.png",
        name: "Sesam",
        background: "51, 10%",
    },
    "sesame-oil": {
        img: "oil.png",
        name: "Sesamöl",
        background: "51, 10%",
    },
    "soy-sauce": {
        img: "soy-sauce.png",
        name: "Sojasauce",
        background: "110, 29%",
    },
    "spring-onion": {
        img: "spring-onion.png",
        name: "Lauchzwiebel",
        background: "110, 29%",
    },
    "sugar": {
        img: "garlic-powder.png",
        name: "Zucker",
        background: "60, 10%",
    },
    "sun-dried-tomatoes": {
        img: "sun-dried-tomatoes.png",
        name: "Sonnengetrocknete Tomaten",
        background: "21, 74%",
    },
    "tahini": {
        img: "tahini.png",
        name: "Tahini",
        background: "42, 47%",
    },
    "tomato": {
        img: "tomato.png",
        name: "Tomate",
        background: "8, 81%",
    },
    "turmeric": {
        img: "turmeric.png",
        name: "Kurkuma",
        background: "35, 96%",
    },
    "vinegar": {
        img: "vinegar.png",
        name: "Essig",
        background: "49, 94%",
    },
    "yoghurt": {
        img: "yoghurt.png",
        name: "Yoghurt",
        background: "70, 50%",
    },
};

export const mapIngredient = (ingredient: IngredientKey): IngredientMetadata => imageMap[ingredient];