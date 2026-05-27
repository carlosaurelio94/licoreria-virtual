export type Locale = "es" | "en";

export type LiquorType =
  | "whisky"
  | "vodka"
  | "ron"
  | "tequila"
  | "gin"
  | "cognac"
  | "vino"
  | "cerveza"
  | "licor";

export type FlavorProfile = "seco" | "dulce" | "ahumado" | "frutal" | "herbal" | "especiado";

export type Review = {
  author: string;
  rating: number;
  comment: { es: string; en: string };
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  brand: string;
  type: LiquorType;
  abv: number;
  volumeMl: number;
  priceArs: number;
  image: string;
  country: { es: string; en: string; code: string; lat: number; lng: number };
  region: { es: string; en: string };
  description: { es: string; en: string };
  profile: FlavorProfile[];
  servingTip: { es: string; en: string };
  pairsWith: { es: string; en: string };
  bestSeller: boolean;
  rating: number;
  reviews: Review[];
};

export const products: Product[] = [
  {
    id: "p1",
    slug: "single-malt-12",
    name: "Single Malt 12 Años",
    brand: "Glen Mor",
    type: "whisky",
    abv: 40,
    volumeMl: 700,
    priceArs: 38900,
    image:
      "https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=900&q=80",
    country: { es: "Escocia", en: "Scotland", code: "GB-SCT", lat: 57.4778, lng: -4.2247 },
    region: { es: "Highlands", en: "Highlands" },
    description: {
      es: "Whisky escocés de malta envejecido 12 años en barricas de roble americano. Notas de miel, vainilla y un final ligeramente ahumado.",
      en: "12-year aged Scotch single malt in American oak. Notes of honey, vanilla and a lightly smoky finish.",
    },
    profile: ["ahumado", "seco"],
    servingTip: {
      es: "Servir en copa Glencairn con una gota de agua mineral para abrir los aromas. Nunca en hielo si querés apreciar la complejidad.",
      en: "Serve in a Glencairn glass with a drop of mineral water to open up the aromas. Skip the ice to fully appreciate complexity.",
    },
    pairsWith: {
      es: "Quesos azules, chocolate amargo, salmón ahumado.",
      en: "Blue cheeses, dark chocolate, smoked salmon.",
    },
    bestSeller: true,
    rating: 4.7,
    reviews: [
      {
        author: "Martín G.",
        rating: 5,
        comment: {
          es: "Increíble relación precio-calidad. Suave y con carácter.",
          en: "Incredible value for the quality. Smooth with real character.",
        },
      },
      {
        author: "Laura P.",
        rating: 4,
        comment: {
          es: "Muy buen whisky para iniciarse en los single malts.",
          en: "Great whisky to start exploring single malts.",
        },
      },
    ],
  },
  {
    id: "p2",
    slug: "vodka-premium",
    name: "Vodka Premium Crystal",
    brand: "Białystok",
    type: "vodka",
    abv: 40,
    volumeMl: 750,
    priceArs: 21500,
    image:
      "https://images.unsplash.com/photo-1614963326623-097433d40c46?auto=format&fit=crop&w=900&q=80",
    country: { es: "Polonia", en: "Poland", code: "PL", lat: 53.1325, lng: 23.1688 },
    region: { es: "Podlaquia", en: "Podlasie" },
    description: {
      es: "Vodka destilado cinco veces a partir de centeno polaco. Cristalino, limpio y ligeramente cremoso en boca.",
      en: "Five-times distilled from Polish rye. Crystal clear, clean, with a slightly creamy mouthfeel.",
    },
    profile: ["seco", "herbal"],
    servingTip: {
      es: "Servir bien helado (-2°C) en vasos shot, o como base de un Martini seco.",
      en: "Serve very cold (-2°C) in shot glasses, or as the base of a dry Martini.",
    },
    pairsWith: {
      es: "Caviar, arenques, pepinillos en salmuera.",
      en: "Caviar, pickled herring, brined cucumbers.",
    },
    bestSeller: true,
    rating: 4.5,
    reviews: [
      {
        author: "Sofía R.",
        rating: 5,
        comment: { es: "Limpísimo. Perfecto para martinis.", en: "Super clean. Perfect for martinis." },
      },
    ],
  },
  {
    id: "p3",
    slug: "ron-anejo-7",
    name: "Ron Añejo 7 Años",
    brand: "Habana Vieja",
    type: "ron",
    abv: 38,
    volumeMl: 700,
    priceArs: 18900,
    image:
      "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&w=900&q=80",
    country: { es: "Cuba", en: "Cuba", code: "CU", lat: 23.1136, lng: -82.3666 },
    region: { es: "La Habana", en: "Havana" },
    description: {
      es: "Ron cubano añejado siete años. Color caoba, notas de vainilla, caramelo, tabaco y madera tostada.",
      en: "Seven-year aged Cuban rum. Mahogany color, notes of vanilla, caramel, tobacco and toasted wood.",
    },
    profile: ["dulce", "especiado"],
    servingTip: {
      es: "Tomarlo solo en copa baja, o en un Old Fashioned con un toque de azúcar moreno.",
      en: "Drink neat in a rocks glass, or in an Old Fashioned with a touch of brown sugar.",
    },
    pairsWith: {
      es: "Habanos, chocolate con leche, postres con dulce de leche.",
      en: "Cigars, milk chocolate, dulce de leche desserts.",
    },
    bestSeller: true,
    rating: 4.6,
    reviews: [
      {
        author: "Diego A.",
        rating: 5,
        comment: { es: "Lo mejor para sobremesa.", en: "The best after-dinner drink." },
      },
      {
        author: "Vale T.",
        rating: 4,
        comment: { es: "Dulce y aromático.", en: "Sweet and aromatic." },
      },
    ],
  },
  {
    id: "p4",
    slug: "tequila-reposado",
    name: "Tequila Reposado 100% Agave",
    brand: "Don Jalisco",
    type: "tequila",
    abv: 40,
    volumeMl: 700,
    priceArs: 27400,
    image:
      "https://images.unsplash.com/photo-1592394533824-9440e5d68530?auto=format&fit=crop&w=900&q=80",
    country: { es: "México", en: "Mexico", code: "MX", lat: 20.8856, lng: -103.7841 },
    region: { es: "Jalisco", en: "Jalisco" },
    description: {
      es: "Tequila reposado 9 meses en barrica de roble. 100% agave azul. Notas de agave cocido, pimienta y vainilla suave.",
      en: "Tequila rested 9 months in oak. 100% blue agave. Notes of cooked agave, pepper and soft vanilla.",
    },
    profile: ["especiado", "herbal"],
    servingTip: {
      es: "Servir en copa caballito a temperatura ambiente. Sin sal ni limón si es bueno: se nota mejor el agave.",
      en: "Serve in a caballito glass at room temperature. Skip the salt and lime to fully appreciate the agave.",
    },
    pairsWith: { es: "Tacos al pastor, ceviche, guacamole.", en: "Tacos al pastor, ceviche, guacamole." },
    bestSeller: true,
    rating: 4.8,
    reviews: [
      {
        author: "Fernanda L.",
        rating: 5,
        comment: { es: "Auténtico y suave.", en: "Authentic and smooth." },
      },
    ],
  },
  {
    id: "p5",
    slug: "gin-london-dry",
    name: "London Dry Gin",
    brand: "Thames No.7",
    type: "gin",
    abv: 43,
    volumeMl: 700,
    priceArs: 24800,
    image:
      "https://images.unsplash.com/photo-1614963366795-973eb8748ebb?auto=format&fit=crop&w=900&q=80",
    country: { es: "Reino Unido", en: "United Kingdom", code: "GB", lat: 51.5074, lng: -0.1278 },
    region: { es: "Londres", en: "London" },
    description: {
      es: "Gin London Dry con 9 botánicos: junípero, cilantro, raíz de angélica, piel de limón y naranja, cardamomo y más.",
      en: "London Dry gin with 9 botanicals: juniper, coriander, angelica root, lemon and orange peel, cardamom and more.",
    },
    profile: ["herbal", "seco"],
    servingTip: {
      es: "El clásico Gin Tonic: una parte de gin, tres de tónica premium, hielo abundante y twist de pomelo.",
      en: "Classic G&T: one part gin, three parts premium tonic, plenty of ice and a grapefruit twist.",
    },
    pairsWith: { es: "Sushi, ostras, ensaladas frescas.", en: "Sushi, oysters, fresh salads." },
    bestSeller: true,
    rating: 4.5,
    reviews: [
      {
        author: "Tomás K.",
        rating: 4,
        comment: { es: "Muy aromático, ideal en G&T.", en: "Very aromatic, ideal in a G&T." },
      },
    ],
  },
  {
    id: "p6",
    slug: "malbec-reserva",
    name: "Malbec Reserva",
    brand: "Finca Andes",
    type: "vino",
    abv: 14,
    volumeMl: 750,
    priceArs: 15600,
    image:
      "https://images.unsplash.com/photo-1568213816046-0ee1c42bd559?auto=format&fit=crop&w=900&q=80",
    country: { es: "Argentina", en: "Argentina", code: "AR", lat: -32.889, lng: -68.8458 },
    region: { es: "Mendoza", en: "Mendoza" },
    description: {
      es: "Malbec de altura, criado 12 meses en roble francés. Notas de ciruela, violetas y cacao. Taninos elegantes.",
      en: "High-altitude Malbec, 12 months in French oak. Notes of plum, violets and cocoa. Elegant tannins.",
    },
    profile: ["frutal", "especiado"],
    servingTip: {
      es: "Decantar 30 min antes. Servir a 16-18°C en copa Bordeaux.",
      en: "Decant 30 min before. Serve at 16-18°C in a Bordeaux glass.",
    },
    pairsWith: { es: "Bife de chorizo, cordero, pastas con salsa roja.", en: "Steak, lamb, red-sauce pasta." },
    bestSeller: true,
    rating: 4.7,
    reviews: [
      {
        author: "Romina B.",
        rating: 5,
        comment: { es: "El mejor Malbec que probé en este precio.", en: "Best Malbec I've tried at this price." },
      },
      {
        author: "Pablo M.",
        rating: 5,
        comment: { es: "Redondo, intenso, perfecto con asado.", en: "Round, intense, perfect with grilled meat." },
      },
    ],
  },
  {
    id: "p7",
    slug: "cognac-vsop",
    name: "Cognac VSOP",
    brand: "Maison Charente",
    type: "cognac",
    abv: 40,
    volumeMl: 700,
    priceArs: 64200,
    image:
      "https://images.unsplash.com/photo-1568213816046-0ee1c42bd559?auto=format&fit=crop&w=900&q=80",
    country: { es: "Francia", en: "France", code: "FR", lat: 45.6498, lng: -0.1556 },
    region: { es: "Cognac", en: "Cognac" },
    description: {
      es: "Cognac VSOP envejecido mínimo 4 años en roble Limousin. Notas de frutos secos, vainilla, naranja confitada.",
      en: "VSOP Cognac aged at least 4 years in Limousin oak. Notes of dried fruit, vanilla, candied orange.",
    },
    profile: ["dulce", "especiado"],
    servingTip: {
      es: "En copa snifter, calentándolo levemente con la palma de la mano para liberar aromas.",
      en: "In a snifter glass, slightly warmed by the palm to release aromas.",
    },
    pairsWith: { es: "Chocolate negro 70%, café espresso, foie gras.", en: "70% dark chocolate, espresso, foie gras." },
    bestSeller: false,
    rating: 4.6,
    reviews: [
      {
        author: "Jorge V.",
        rating: 5,
        comment: { es: "Elegante y aromático.", en: "Elegant and aromatic." },
      },
    ],
  },
  {
    id: "p8",
    slug: "ipa-artesanal",
    name: "IPA Artesanal",
    brand: "Patagonia Brew Co.",
    type: "cerveza",
    abv: 6.8,
    volumeMl: 500,
    priceArs: 3200,
    image:
      "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=900&q=80",
    country: { es: "Argentina", en: "Argentina", code: "AR", lat: -41.1335, lng: -71.3103 },
    region: { es: "Bariloche", en: "Bariloche" },
    description: {
      es: "IPA con lúpulos Citra, Mosaic y Simcoe. Amarga, cítrica y muy aromática. 60 IBU.",
      en: "IPA with Citra, Mosaic and Simcoe hops. Bitter, citrusy, very aromatic. 60 IBU.",
    },
    profile: ["frutal", "herbal"],
    servingTip: {
      es: "Servir entre 6-8°C en copa tulipán para concentrar aromas del lúpulo.",
      en: "Serve between 6-8°C in a tulip glass to concentrate hop aromas.",
    },
    pairsWith: { es: "Hamburguesas, quesos curados, comida picante.", en: "Burgers, aged cheeses, spicy food." },
    bestSeller: true,
    rating: 4.4,
    reviews: [
      {
        author: "Nico F.",
        rating: 5,
        comment: { es: "Lúpulo equilibrado, muy tomable.", en: "Balanced hops, very drinkable." },
      },
    ],
  },
  {
    id: "p9",
    slug: "bourbon-small-batch",
    name: "Bourbon Small Batch",
    brand: "Kentucky River",
    type: "whisky",
    abv: 45,
    volumeMl: 750,
    priceArs: 41200,
    image:
      "https://images.unsplash.com/photo-1582819509237-d6c1ce0c5b51?auto=format&fit=crop&w=900&q=80",
    country: { es: "Estados Unidos", en: "United States", code: "US", lat: 38.2009, lng: -84.8733 },
    region: { es: "Kentucky", en: "Kentucky" },
    description: {
      es: "Bourbon small batch con 70% maíz. Notas intensas de caramelo, vainilla y roble. Final largo y especiado.",
      en: "Small batch bourbon, 70% corn mash. Intense notes of caramel, vanilla and oak. Long spicy finish.",
    },
    profile: ["dulce", "especiado"],
    servingTip: {
      es: "Excelente en un Old Fashioned o un Manhattan. Solo, con una piedra de hielo grande.",
      en: "Great in an Old Fashioned or Manhattan. Neat, with one large ice cube.",
    },
    pairsWith: { es: "BBQ, costillas glaseadas, pecan pie.", en: "BBQ, glazed ribs, pecan pie." },
    bestSeller: false,
    rating: 4.5,
    reviews: [],
  },
  {
    id: "p10",
    slug: "amaretto-italiano",
    name: "Amaretto Tradizionale",
    brand: "Saronno",
    type: "licor",
    abv: 28,
    volumeMl: 700,
    priceArs: 22300,
    image:
      "https://images.unsplash.com/photo-1601924381811-c5fc6c2754e9?auto=format&fit=crop&w=900&q=80",
    country: { es: "Italia", en: "Italy", code: "IT", lat: 45.6256, lng: 9.0319 },
    region: { es: "Lombardía", en: "Lombardy" },
    description: {
      es: "Licor italiano de almendra amarga. Dulce, aromático, con notas de mazapán y vainilla.",
      en: "Italian bitter almond liqueur. Sweet, aromatic, with marzipan and vanilla notes.",
    },
    profile: ["dulce", "frutal"],
    servingTip: {
      es: "Sobre hielo, en café con whisky (Godfather), o en repostería casera.",
      en: "On the rocks, in coffee with whisky (Godfather), or in homemade desserts.",
    },
    pairsWith: { es: "Tiramisú, cantucci, helado de vainilla.", en: "Tiramisu, cantucci, vanilla ice cream." },
    bestSeller: false,
    rating: 4.3,
    reviews: [
      {
        author: "Cami D.",
        rating: 4,
        comment: { es: "Muy versátil para cócteles.", en: "Very versatile for cocktails." },
      },
    ],
  },
  {
    id: "p11",
    slug: "mezcal-joven",
    name: "Mezcal Joven Espadín",
    brand: "Casa Oaxaca",
    type: "tequila",
    abv: 42,
    volumeMl: 700,
    priceArs: 33500,
    image:
      "https://images.unsplash.com/photo-1571767454098-246b94fbcf70?auto=format&fit=crop&w=900&q=80",
    country: { es: "México", en: "Mexico", code: "MX", lat: 17.0732, lng: -96.7266 },
    region: { es: "Oaxaca", en: "Oaxaca" },
    description: {
      es: "Mezcal artesanal de agave espadín, ahumado en horno de tierra. Notas intensas de humo, tierra y agave cocido.",
      en: "Artisanal mezcal from espadín agave, smoked in earthen pit. Intense smoke, earth and cooked agave notes.",
    },
    profile: ["ahumado", "herbal"],
    servingTip: {
      es: "Beso, no shot: sorbos pequeños en copita de barro, con rodaja de naranja y sal de gusano.",
      en: "A kiss, not a shot: small sips in a clay cup, with orange slice and worm salt.",
    },
    pairsWith: { es: "Mole negro, tlayudas, chiles rellenos.", en: "Mole negro, tlayudas, stuffed chiles." },
    bestSeller: false,
    rating: 4.7,
    reviews: [
      {
        author: "Beto S.",
        rating: 5,
        comment: { es: "El humo justo, espectacular.", en: "Just the right smoke, spectacular." },
      },
    ],
  },
  {
    id: "p12",
    slug: "sake-junmai",
    name: "Sake Junmai",
    brand: "Hakurei",
    type: "licor",
    abv: 15,
    volumeMl: 720,
    priceArs: 19800,
    image:
      "https://images.unsplash.com/photo-1623073284788-0d846f75e329?auto=format&fit=crop&w=900&q=80",
    country: { es: "Japón", en: "Japan", code: "JP", lat: 35.6762, lng: 139.6503 },
    region: { es: "Niigata", en: "Niigata" },
    description: {
      es: "Sake Junmai de arroz pulido al 60%. Limpio, ligeramente dulce, con notas a melón blanco y arroz.",
      en: "Junmai sake with 60% rice polish. Clean, slightly sweet, notes of white melon and rice.",
    },
    profile: ["dulce", "frutal"],
    servingTip: {
      es: "Frío (8-12°C) en copa tipo tulipán, o ligeramente tibio (40°C) en invierno.",
      en: "Chilled (8-12°C) in a tulip glass, or warmed (40°C) in winter.",
    },
    pairsWith: { es: "Sushi, sashimi, tempura, ramen.", en: "Sushi, sashimi, tempura, ramen." },
    bestSeller: false,
    rating: 4.4,
    reviews: [],
  },
  {
    id: "p13",
    slug: "fernet-clasico",
    name: "Fernet Clásico",
    brand: "Branca",
    type: "licor",
    abv: 39,
    volumeMl: 750,
    priceArs: 14500,
    image:
      "https://images.unsplash.com/photo-1568100119358-a05ee1d44455?auto=format&fit=crop&w=900&q=80",
    country: { es: "Italia", en: "Italy", code: "IT", lat: 45.4642, lng: 9.19 },
    region: { es: "Milán", en: "Milan" },
    description: {
      es: "Amaro italiano con 27 hierbas y especias. Amargo, intenso, con notas mentoladas. Ícono argentino del fernet con cola.",
      en: "Italian amaro with 27 herbs and spices. Bitter, intense, with menthol notes. Argentine icon of fernet & coke.",
    },
    profile: ["herbal", "seco"],
    servingTip: {
      es: "70% Coca-Cola, 30% Fernet, mucho hielo y servir en vaso ancho. O solo como digestivo.",
      en: "70% Coke, 30% Fernet, lots of ice in a tumbler. Or neat as a digestif.",
    },
    pairsWith: { es: "Asado, picadas, después de comer.", en: "Grilled meat, charcuterie, after meals." },
    bestSeller: true,
    rating: 4.5,
    reviews: [
      {
        author: "Juampi C.",
        rating: 5,
        comment: { es: "Imposible un asado sin esto.", en: "No asado is complete without it." },
      },
    ],
  },
  {
    id: "p14",
    slug: "champagne-brut",
    name: "Champagne Brut",
    brand: "Maison Reims",
    type: "vino",
    abv: 12,
    volumeMl: 750,
    priceArs: 58900,
    image:
      "https://images.unsplash.com/photo-1592528014510-d83d1a629df4?auto=format&fit=crop&w=900&q=80",
    country: { es: "Francia", en: "France", code: "FR", lat: 49.2583, lng: 4.0317 },
    region: { es: "Champagne", en: "Champagne" },
    description: {
      es: "Champagne brut con assemblage de Pinot Noir, Chardonnay y Meunier. Burbujas finas, notas de brioche y manzana verde.",
      en: "Brut champagne blending Pinot Noir, Chardonnay and Meunier. Fine bubbles, brioche and green apple notes.",
    },
    profile: ["seco", "frutal"],
    servingTip: {
      es: "Servir a 8°C en copa tulipán (no flauta) para apreciar mejor los aromas.",
      en: "Serve at 8°C in a tulip glass (not flute) for better aromas.",
    },
    pairsWith: { es: "Ostras, sushi, brunch, postres frutales.", en: "Oysters, sushi, brunch, fruit desserts." },
    bestSeller: false,
    rating: 4.8,
    reviews: [
      {
        author: "Inés M.",
        rating: 5,
        comment: { es: "Para ocasiones especiales, vale cada peso.", en: "For special occasions, worth every peso." },
      },
    ],
  },
];

export const getProductBySlug = (slug: string) => products.find((p) => p.slug === slug);
export const getBestSellers = () => products.filter((p) => p.bestSeller);
export const getAllTypes = (): LiquorType[] =>
  Array.from(new Set(products.map((p) => p.type))) as LiquorType[];
