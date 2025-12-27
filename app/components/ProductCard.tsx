import Image from 'next/image';
import Link from 'next/link';

interface ProductSpec {
  label: string;
  value: string;
}

interface ProductCardProps {
  id: string;
  name: string;
  code: string;
  tagline: string;
  price: string;
  status: 'Available' | 'Coming Soon';
  image: string;
  gradient: string;
  description: string;
  features: string[];
  specifications: ProductSpec[];
  useCases: string[];
  index: number;
}

export default function ProductCard({
  id,
  name,
  code,
  tagline,
  price,
  status,
  image,
  gradient,
  description,
  features,
  specifications,
  useCases,
  index,
}: ProductCardProps) {
  const isReversed = index % 2 === 1;

  return (
    <div className="relative">
      {/* Background Card */}
      <div className="glass p-8 md:p-12 rounded-3xl">
        <div
          id={id}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center ${
            isReversed ? 'lg:flex-row-reverse' : ''
          }`}
        >
          {/* Product Image */}
          <div className={`relative ${isReversed ? 'lg:order-2' : ''}`}>
            <div className="relative glass p-6 md:p-8 rounded-3xl">
              {/* Status Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span
                  className={`px-4 py-2 rounded-full text-xs font-bold shadow-lg ${
                    status === 'Available'
                      ? 'bg-green-500 text-white'
                      : 'bg-orange-500 text-white'
                  }`}
                >
                  {status}
                </span>
              </div>

              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5 rounded-3xl`}
              ></div>

              {/* Image */}
              <div className="relative w-full h-80 md:h-96">
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="object-contain p-4 md:p-8"
                />
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className={`space-y-6 ${isReversed ? 'lg:order-1' : ''}`}>
            {/* Product Header */}
            <div>
              <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                {code}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                {name}
              </h2>
              <p
                className={`text-lg font-semibold text-transparent bg-gradient-to-r ${gradient} bg-clip-text mb-4`}
              >
                {tagline}
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Price */}
            <div className="flex items-baseline space-x-2">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                {price}
              </span>
              <span className="text-sm text-gray-500">+ taxes</span>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                Key Features
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    <svg
                      className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                Specifications
              </h3>
              <div className="glass p-4 rounded-2xl space-y-2">
                {specifications.map((spec, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-slate-700 last:border-0"
                  >
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {spec.label}
                    </span>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Use Cases */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                Perfect For
              </h3>
              <div className="flex flex-wrap gap-2">
                {useCases.map((useCase, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-full text-sm font-medium glass"
                  >
                    {useCase}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <a
                href="https://github.com/Thinking-Robot-Tech/Thinking-Robot/releases/download/v1.0.0/PICO.IOT.APP.apk"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-3 bg-gradient-to-r ${gradient} text-white font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 text-center`}
              >
                {status === 'Available' ? 'Buy Now' : 'Notify Me'}
              </a>
              <Link
                href="/#products"
                className="px-6 py-3 border-2 border-gray-300 dark:border-slate-700 text-gray-900 dark:text-white font-semibold rounded-xl hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 text-center"
              >
                View Demo
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Separator Line (not on last item) */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-slate-700 to-transparent mt-20"></div>
    </div>
  );
}
