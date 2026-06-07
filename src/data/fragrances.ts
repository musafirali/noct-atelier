import midnightCedar from "@/assets/midnight-cedar.jpg";
import ashFig from "@/assets/ash-fig.jpg";
import rainOnStone from "@/assets/rain-on-stone.jpg";
import blackIris from "@/assets/black-iris.jpg";
import vetiverNo7 from "@/assets/vetiver-no-7.jpg";
import amberPassage from "@/assets/amber-passage.jpg";

export interface Fragrance {
  slug: string;
  number: string;
  name: string;
  family: string;
  descriptor: string;
  inspiration: string;
  narrative: string[];
  notes: { top: string[]; heart: string[]; base: string[] };
  sensory: string[];
  image: string;
}

export const fragrances: Fragrance[] = [
  {
    slug: "midnight-cedar",
    number: "I",
    name: "Midnight Cedar",
    family: "Woods · Smoke",
    descriptor: "A still forest after rain. Dry cedar, banked embers, the cold of an open window.",
    inspiration: "A timber cabin in late November in the Western Ghats. The hour after the fire has gone out.",
    narrative: [
      "Midnight Cedar began as a study of cold wood — the scent of timber held in a room where the heat has just left.",
      "The composition opens with the dry crack of pink pepper, settles into resinous Himalayan cedar, and closes with a thread of smoke that never fully resolves.",
    ],
    notes: {
      top: ["Pink Pepper", "Bergamot Peel", "Black Tea"],
      heart: ["Atlas Cedar", "Iris Root", "Violet Leaf"],
      base: ["Vetiver", "Birch Tar", "Cashmeran"],
    },
    sensory: ["Dry", "Still", "Resinous", "Cool"],
    image: midnightCedar,
  },
  {
    slug: "ash-fig",
    number: "II",
    name: "Ash & Fig",
    family: "Fruit · Mineral",
    descriptor: "Green fig skin laid against cooling ash. Sweetness held in restraint.",
    inspiration: "A Mediterranean garden the morning after a fire. Fig leaves, warm stone, faint smoke.",
    narrative: [
      "We were drawn to the contradiction of fig — at once milky and green, sweet and faintly bitter.",
      "Set against a base of cold ash and warm cedar, the fruit becomes architectural rather than appetising.",
    ],
    notes: {
      top: ["Fig Leaf", "Green Mandarin", "Cardamom"],
      heart: ["Fig Milk", "Tuberose Absolute", "Hay"],
      base: ["Ash Accord", "Sandalwood", "Tonka Bean"],
    },
    sensory: ["Green", "Smoky", "Milky", "Sun-warmed"],
    image: ashFig,
  },
  {
    slug: "rain-on-stone",
    number: "III",
    name: "Rain on Stone",
    family: "Mineral · Aquatic",
    descriptor: "Wet slate, cold air, the held breath before a storm crosses.",
    inspiration: "A courtyard in Lisbon during the first rainfall of autumn.",
    narrative: [
      "Petrichor is a difficult subject. We avoided the obvious — no synthetic ozone, no melon.",
      "Instead, mineral accords of wet slate and flint sit beneath green moss and a cool, almost metallic violet.",
    ],
    notes: {
      top: ["Flint Accord", "Wet Stone", "Violet Leaf"],
      heart: ["Iris", "Moss", "Lentisque"],
      base: ["Vetiver", "Ambrette Seed", "Grey Amber"],
    },
    sensory: ["Cool", "Mineral", "Quiet", "Glassy"],
    image: rainOnStone,
  },
  {
    slug: "black-iris",
    number: "IV",
    name: "Black Iris",
    family: "Floral · Earth",
    descriptor: "Iris taken to its darkest register. Powdered earth, leather, cold violet.",
    inspiration: "A pressed flower forgotten between the pages of a leather-bound book.",
    narrative: [
      "Iris is often handled as a powder. We were interested in its root — the part that smells of damp soil and cold metal.",
      "Black Iris is the flower remembered, not the flower in bloom.",
    ],
    notes: {
      top: ["Carrot Seed", "Black Pepper", "Aldehydes"],
      heart: ["Iris Pallida", "Orris Butter", "Violet"],
      base: ["Suede", "Patchouli", "Black Musk"],
    },
    sensory: ["Powdered", "Earthen", "Cold", "Velvet"],
    image: blackIris,
  },
  {
    slug: "vetiver-no-7",
    number: "V",
    name: "Vetiver No. 7",
    family: "Roots · Grass",
    descriptor: "Haitian vetiver in its rawest form, lifted by citrus peel and dry hay.",
    inspiration: "A field cut at the end of summer. The smell of work and warm ground.",
    narrative: [
      "Our seventh vetiver study, distilled from a single estate in Les Cayes.",
      "Worn close to the skin, it reads as warmth and earth; from a distance, as smoke and grass.",
    ],
    notes: {
      top: ["Yuzu", "Grapefruit Peel", "Pink Pepper"],
      heart: ["Vetiver Bourbon", "Hay Absolute", "Geranium"],
      base: ["Haitian Vetiver", "Cedarwood", "Vanilla Pod"],
    },
    sensory: ["Earthen", "Sun-warmed", "Green", "Smoky"],
    image: vetiverNo7,
  },
  {
    slug: "amber-passage",
    number: "VI",
    name: "Amber Passage",
    family: "Amber · Resin",
    descriptor: "Resin warmed in the palm. Honeyed labdanum, beeswax, a trace of incense.",
    inspiration: "A passageway through a Marrakech riad in late afternoon. Heat held in stone.",
    narrative: [
      "Amber compositions can become loud. We worked to keep this one low, almost spoken.",
      "Labdanum and benzoin do most of the work; a thread of frankincense keeps the sweetness honest.",
    ],
    notes: {
      top: ["Saffron", "Bitter Orange", "Pink Peppercorn"],
      heart: ["Labdanum", "Beeswax", "Immortelle"],
      base: ["Benzoin", "Frankincense", "Sandalwood"],
    },
    sensory: ["Warm", "Resinous", "Honeyed", "Slow"],
    image: amberPassage,
  },
];

export const getFragrance = (slug: string) => fragrances.find((f) => f.slug === slug);
export const getRelated = (slug: string, count = 2) =>
  fragrances.filter((f) => f.slug !== slug).slice(0, count);
