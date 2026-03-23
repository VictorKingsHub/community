import { IconType } from "react-icons";
import {
  FiMap,
  FiUsers,
  FiBookOpen,
  FiImage,
  FiGlobe,
  FiTrendingUp,
} from "react-icons/fi";

export type Feature = {
  title: string;
  description: string;
  icon: IconType;
};

export const features: Feature[] = [
  {
    title: "Explore Communities",
    description:
      "Discover all communities in Lokpanta including Umudi, Ukomi, Amaekwuru, Uru, and Ihite.",
    icon: FiUsers,
  },
  {
    title: "Cultural Heritage",
    description:
      "Learn about traditions, festivals like Iri Ji, and the cultural identity of the people.",
    icon: FiGlobe,
  },
  {
    title: "Education & Schools",
    description:
      "Access information about schools and educational development in the community.",
    icon: FiBookOpen,
  },
  {
    title: "Gallery & Media",
    description:
      "View photos and moments from events, markets, and everyday life.",
    icon: FiImage,
  },
  {
    title: "Local Information",
    description:
      "Get insights into market days, language, and important community updates.",
    icon: FiMap,
  },
  {
    title: "Community Growth",
    description:
      "Track development, initiatives, and opportunities within Lokpanta.",
    icon: FiTrendingUp,
  },
];