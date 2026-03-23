type Props = {
  title: string;
  description: string;
  icon ?: any;
};

export default function FeatureCard({ title, description, icon: Icon }: Props) {
  return (
    <div className="p-6 rounded-2xl bg-white shadow-sm hover:shadow-lg transition border border-gray-100 group">
      
      {/* Icon */}
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-700 text-xl">
        <Icon />
      </div>

      {/* Content */}
      <h3 className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-green-700">
        {title}
      </h3>

      <p className="mt-2 text-sm text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}