import ProductCard from '../components/ProductCard';

export const metadata = {
  title: 'PICO IOT Products - Smart Home Devices',
  description: 'Explore our range of smart home products.',
};

export default function ProductsPage() {
  const products = [
    {
      id: 'pico-light',
      name: 'PICO Light',
      code: 'PICO-BLB1',
      tagline: 'Control from anywhere via App',
      price: '₹999',
      status: 'Available' as const,
      image: '/images/products/pico-bulb.png',
      gradient: 'from-blue-500 to-cyan-500',
      description: 'The simplest way to make any light smart. Just screw it into your existing bulb socket.',
      features: [
        'Fits standard B22 holders',
        'WiFi enabled - 2.4GHz',
        'Set Timers & Schedules',
        'Voice Control Compatible',
        'Energy monitoring',
        'Auto-recovery after power cut',
      ],
      specifications: [
        { label: 'Wattage', value: '9W / 12W' },
        { label: 'Voltage', value: '220-240V AC' },
        { label: 'Color', value: 'Warm White / Cool White' },
        { label: 'Lifespan', value: '25,000 hours' },
        { label: 'Warranty', value: '1 Year' },
      ],
      useCases: ['Living room lighting', 'Bedroom lamps', 'Overhead fixtures', 'Study tables'],
    },
    {
      id: 'pico-light-plus',
      name: 'PICO Light+',
      code: 'PICO-BLB2',
      tagline: 'WiFi + Motion controls',
      price: '₹1,499',
      status: 'Available' as const,
      image: '/images/products/pico-light-plus.png',
      gradient: 'from-purple-500 to-pink-500',
      description: 'Combined WiFi and motion sensor for ultimate smart lighting.',
      features: [
        'Combined WiFi & PIR Motion Sensor',
        'Auto ON when you walk in',
        'Wireless Control via App',
        'Adjustable sensitivity',
        'Perfect for Hallways/Washrooms',
        'Energy saving mode',
      ],
      specifications: [
        { label: 'Wattage', value: '9W / 12W' },
        { label: 'Detection Range', value: 'Up to 6 meters' },
        { label: 'Detection Angle', value: '120°' },
        { label: 'Auto-off Timer', value: 'Configurable' },
        { label: 'Warranty', value: '1 Year' },
      ],
      useCases: ['Hallways & corridors', 'Washrooms', 'Staircase lighting', 'Garages'],
    },
    {
      id: 'pico-motion',
      name: 'PICO Motion',
      code: 'PICO-MOT1',
      tagline: 'Simple PIR based lights control',
      price: '₹799',
      status: 'Available' as const,
      image: '/images/products/pico-motion.png',
      gradient: 'from-orange-500 to-red-500',
      description: 'Simple motion-activated lighting. No WiFi needed.',
      features: [
        'Instant Motion Detection',
        'Saves Energy Automatically',
        'Simple Setup (No WiFi Needed)',
        'Works standalone',
        'Ideal for Staircases/Stores',
        'Plug and play',
      ],
      specifications: [
        { label: 'Detection Range', value: 'Up to 8 meters' },
        { label: 'Detection Angle', value: '140°' },
        { label: 'Auto-off Timer', value: '30 sec - 5 min' },
        { label: 'Power', value: 'Battery / Wired' },
        { label: 'Warranty', value: '1 Year' },
      ],
      useCases: ['Staircases', 'Storage rooms', 'Basements', 'Commercial spaces'],
    },
    {
      id: 'pico-socket',
      name: 'PICO Socket',
      code: 'PICO-SOC1',
      tagline: 'Plug-and-play smart adapter',
      price: '₹899',
      status: 'Coming Soon' as const,
      image: '/images/products/pico-socket.png',
      gradient: 'from-green-500 to-teal-500',
      description: 'Turn any appliance into a smart device.',
      features: [
        'Plug-and-play design',
        'No wiring needed',
        'Control any appliance',
        'Energy monitoring',
        'Schedule on/off times',
        'Overload protection',
      ],
      specifications: [
        { label: 'Max Load', value: '10A (2200W)' },
        { label: 'Voltage', value: '220-240V AC' },
        { label: 'Socket Type', value: 'Indian 3-pin' },
        { label: 'WiFi', value: '2.4GHz' },
        { label: 'Warranty', value: '1 Year' },
      ],
      useCases: ['Chargers', 'Table fans', 'TVs', 'Kitchen appliances'],
    },
    {
      id: 'pico-node',
      name: 'PICO Node',
      code: 'PICO-N01 to N05',
      tagline: 'Multi-channel smart control',
      price: '₹1,299 - ₹2,999',
      status: 'Coming Soon' as const,
      image: '/images/products/pico-node.png',
      gradient: 'from-indigo-500 to-blue-500',
      description: 'Professional inline module with 1-5 independent channels.',
      features: [
        '1 to 5 independent channels',
        'Designed for switchboard',
        'Professional installation',
        'Control multiple lights/fans',
        'Perfect for new construction',
        'Scene creation support',
      ],
      specifications: [
        { label: 'Channels', value: '1 / 2 / 3 / 4 / 5' },
        { label: 'Load per Channel', value: '5A (1100W)' },
        { label: 'Voltage', value: '220-240V AC' },
        { label: 'Size', value: 'Compact switchboard fit' },
        { label: 'Warranty', value: '2 Years' },
      ],
      useCases: ['Multi-light fixtures', 'Whole room control', 'New construction', 'Office spaces'],
    },
    {
      id: 'pico-power',
      name: 'PICO Power',
      code: 'PICO-PWR1',
      tagline: 'Heavy-duty smart control',
      price: '₹1,999',
      status: 'Coming Soon' as const,
      image: '/images/products/pico-power.png',
      gradient: 'from-red-500 to-orange-500',
      description: 'High-amperage heavy-duty version for demanding appliances.',
      features: [
        'Heavy-duty 16A rating',
        'Built for high-power devices',
        'Smart scheduling',
        'Energy monitoring',
        'Overload & surge protection',
        'Professional grade',
      ],
      specifications: [
        { label: 'Max Load', value: '16A (3500W)' },
        { label: 'Voltage', value: '220-240V AC' },
        { label: 'Protection', value: 'Surge & Overload' },
        { label: 'Installation', value: 'Professional required' },
        { label: 'Warranty', value: '2 Years' },
      ],
      useCases: ['Geysers', 'Air conditioners', 'Water pumps', 'Heavy appliances'],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            <span className="text-gray-900 dark:text-white">Complete </span>
            <span className="gradient-text">PICO IOT</span>
            <span className="text-gray-900 dark:text-white"> Range</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            From simple smart bulbs to professional multi-channel controllers.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto space-y-16">
          {products.map((product, index) => (
            <ProductCard key={product.id} {...product} index={index} />
          ))}
        </div>
      </section>

      {/* Comparison CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-slate-900/50 dark:to-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">Not sure which </span>
            <span className="gradient-text">product fits?</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Our team is here to help you choose the perfect solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Contact Us
            </a>
            <a
              href="https://github.com/Thinking-Robot-Tech/Thinking-Robot/releases/download/v1.0.0/PICO.IOT.APP.apk"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white font-bold rounded-xl hover:border-blue-500 transition-all duration-300"
            >
              Download App
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
