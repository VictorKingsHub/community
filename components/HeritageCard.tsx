import Link from "next/link";

type Props = {
  title: string;
  slug: string;
  description: string;
  icon: string;
};

export default function HeritageCard({
  title,
  slug,
  description,
  icon,
}: Props) {
  return (
    <Link href={`/heritage/${slug}`}>
      <div className="group p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition duration-300 cursor-pointer border border-gray-100">
        
        {/* Icon */}
        <div className="text-4xl">{icon}</div>

        {/* Content */}
        <h3 className="mt-4 text-xl font-bold text-gray-900 group-hover:text-green-700">
          {title}
        </h3>

        <p className="mt-2 text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </Link>
  );
}