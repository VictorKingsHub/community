export type Community = {
  name: string;
  slug: string;
  image: string;
  description: string;
};

export const communities: Community[] = [
  {
    name: "Umudi",
    slug: "umudi",
    image: "/communities/umudi.jpg",
    description: "A vibrant and historic part of Lokpanta.",
  },
  {
    name: "Ukomi",
    slug: "ukomi",
    image: "/communities/ukomi.jpg",
    description: "Known for strong cultural roots and unity.",
  },
  {
    name: "Amaekwuru",
    slug: "amaekwuru",
    image: "/communities/amaekwuru.jpg",
    description: "Rich in tradition and community spirit.",
  },
  {
    name: "Uru",
    slug: "uru",
    image: "/communities/uru.jpg",
    description: "A peaceful and developing area.",
  },
  {
    name: "Ihite",
    slug: "ihite",
    image: "/communities/ihite.jpg",
    description: "A growing community with deep heritage.",
  },
];