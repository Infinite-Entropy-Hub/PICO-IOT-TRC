export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">PICO IOT</div>
          <div className="hidden md:flex gap-8">
            <a href="#products" className="text-gray-600 hover:text-gray-900">Products</a>
            <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#business" className="text-gray-600 hover:text-gray-900">For Business</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Get Early Access
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Make Every Switch Smart
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Transform your home and office into an intelligent space. Control lights, fans, 
          and appliances from anywhere—no rewiring, no hassle.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700">
            Pre-Order Now
          </button>
          <button className="border-2 border-gray-300 px-8 py-3 rounded-lg text-lg hover:border-gray-400">
            Watch Demo
          </button>
        </div>
      </section>

      {/* Product Family */}
      <section id="products" className="px-6 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">PICO Product Family</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Build the exact smart system you want, one piece at a time
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* PICO Bulb */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-bold mb-2">PICO Bulb</h3>
              <p className="text-sm text-gray-500 mb-3">PICO-BLB1</p>
              <p className="text-gray-600 mb-4">
                Installs directly into existing bulb sockets. The simplest way to make any light smart.
              </p>
              <p className="text-sm text-gray-500">Perfect for: Lamps, overhead lighting, quick DIY setup</p>
            </div>

            {/* PICO Socket */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-green-100 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl">🔌</span>
              </div>
              <h3 className="text-xl font-bold mb-2">PICO Socket</h3>
              <p className="text-sm text-gray-500 mb-3">PICO-SOC1</p>
              <p className="text-gray-600 mb-4">
                Plug-and-play smart adapter. Simply plug it in and control any appliance.
              </p>
              <p className="text-sm text-gray-500">Perfect for: Chargers, fans, TVs—no wiring needed</p>
            </div>

            {/* PICO Node */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-purple-100 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-2">PICO Node</h3>
              <p className="text-sm text-gray-500 mb-3">PICO-N01 to N05</p>
              <p className="text-gray-600 mb-4">
                Inline module with 1-5 independent channels. Designed for switchboard installation.
              </p>
              <p className="text-sm text-gray-500">Perfect for: Multi-light fixtures, whole rooms, new construction</p>
            </div>

            {/* PICO Power */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-orange-100 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="text-xl font-bold mb-2">PICO Power</h3>
              <p className="text-sm text-gray-500 mb-3">PICO-PWR1</p>
              <p className="text-gray-600 mb-4">
                High-amperage heavy-duty version built for demanding appliances.
              </p>
              <p className="text-sm text-gray-500">Perfect for: Geysers, ACs, water pumps (up to 16A)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">The PICO Advantage</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">🌍</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Control From Anywhere</h3>
              <p className="text-gray-600">
                At work or on vacation, manage your entire home from the PICO app.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">🔄</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Auto-Recovery</h3>
              <p className="text-gray-600">
                Devices automatically recover from power and Wi-Fi outages. Always reliable.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">📍</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Geofencing</h3>
              <p className="text-gray-600">
                Lights turn on when you arrive home, off when you leave. Effortless.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">🏠</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Away Mode</h3>
              <p className="text-gray-600">
                Simulate presence by turning lights on/off at intervals to deter intruders.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Energy Insights</h3>
              <p className="text-gray-600">
                Track power consumption and identify opportunities to save on electricity bills.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">👨‍👩‍👧‍👦</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Family Profiles</h3>
              <p className="text-gray-600">
                Every family member gets personalized settings, favorites, and geofencing rules.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Business */}
      <section id="business" className="px-6 py-16 bg-blue-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Built for Businesses & Institutions</h2>
          <p className="text-xl text-gray-700 mb-8">
            Facility managers in offices, schools, and public venues can centrally manage 
            lighting and appliances to eliminate energy waste from devices left running in empty rooms.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700">
            Request Enterprise Demo
          </button>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Setup in 3 Simple Steps</h2>
          
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Install Your PICO Device</h3>
                <p className="text-gray-600">
                  Plug in PICO Socket or screw in PICO Bulb. For Nodes, install in your switchboard (or hire an electrician).
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Scan & Claim in the App</h3>
                <p className="text-gray-600">
                  Open the PICO app, scan the QR code on the welcome card, enter your Wi-Fi credentials. Done in 2-3 minutes.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Control & Automate</h3>
                <p className="text-gray-600">
                  Start controlling from anywhere, set schedules, enable geofencing, and enjoy your smart home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white px-6 py-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">PICO IOT</h3>
            <p className="text-gray-400">
              Making smart automation simple, affordable, and reliable for everyone.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#products" className="hover:text-white">Products</a></li>
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#business" className="hover:text-white">For Business</a></li>
              <li><a href="/developers" className="hover:text-white">For Developers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="text-gray-400">Email: hello@picoiot.com</p>
            <p className="text-gray-400">Location: Nagpur, India</p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© 2025 Thinking Robot. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
