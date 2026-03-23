import Link from "next/link";

type Props = {
  name: string;
  slug: string;
  image: string;
  description: string;
};

export default function CommunityCard({ name, slug, image, description }: Props) {
  return (
    <Link href={`/communities/${slug}`}>
      <div className="relative h-64 rounded-xl overflow-hidden shadow-lg cursor-pointer group">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 p-5 text-white">
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-sm text-gray-200 mt-1">{description}</p>
        </div>
      </div>
    </Link>
  );
}