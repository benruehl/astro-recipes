
import type { CollectionEntry } from 'astro:content';

type Recipe = CollectionEntry<'recipes'>;

const imageMap: { [id in Recipe["data"]["ingredients"][0]["name"]] : string } = {
    "Apfel": "apple.jpg",
    "Aubergine": "aubergine.jpg",
    "Butter": "butter.png",
    "Cayenne": "cayenne.png",
    "Chili": "chili.png",
    "Creme Vega": "creme-vega.jpg",
    "Essig": "vinegar.png",
    "Frühlingszwiebel": "spring-onion.png",
    "Limettensaft": "lime.png",
    "Limettenschale": "lime.png",
    "Maiskolben": "corn.png",
    "Mayonnaise": "mayonnaise.png",
    "Misopaste": "miso.png",
    "Honig": "honey.jpg",
    "Karotte": "carrot.png",
    "Kichererbsen": "chickpeas.png",
    "Knoblauch": "garlic.jpg",
    "Knoblauchpulver": "garlic-powder.png",
    "Koriander": "koriander.png",
    "Kreuzkümmel": "cumin.png",
    "Kurkuma": "turmeric.png",
    "Öl": "oil.png",
    "Paprikapulver": "paprika.png",
    "Pfeffer": "pepper.jpg",
    "Salz": "salt.png",
    "Schnittlauch": "chives.jpg",
    "Spitzkohl": "pointed-cabbage.png",
    "Tahini": "tahini.png",
    "Zimt": "cinnamon.png",
    "Zucker": "garlic-powder.png"
};

export const mapIngredientFile = (ingredient: Recipe["data"]["ingredients"][0]["name"]) => imageMap[ingredient];