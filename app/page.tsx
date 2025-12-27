'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Sticky Video Component with Close Button
function StickyVideo() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-40 hidden lg:block">
      <div className="relative group">
        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute -top-2 -right-2 z-50 w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
          aria-label="Close video"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Video Container - 16:9 ratio */}
        <div className="relative w-64 aspect-video rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300">
          {/* Circular Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-blue-500/10 pointer-events-none z-10"></div>
          <div className="absolute -inset-20 bg-gradient-radial from-blue-500/10 via-purple-500/5 to-transparent blur-3xl pointer-events-none"></div>
          
          {/* Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/images/funny_pig1.mp4" type="video/mp4" />
          </video>
          
          {/* Playful Label */}
          <div className="absolute bottom-2 left-2 right-2 text-center z-20">
            <span className="text-xs font-bold text-white bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
              Smart Life 🐷
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const products = [
    {
      name: 'PICO LIGHT',
      tagline: 'Control from anywhere via App',
      features: [
        'Fits standard B22 holders',
        'Set Timers & Schedules',
        'Voice Control Compatible',
      ],
      image: '/images/products/pico-bulb.png',
      gradient: 'from-blue-500 to-cyan-500',
      iconBg: 'bg-blue-500',
    },
    {
      name: 'PICO LIGHT +',
      tagline: 'Wifi + Motion controls',
      features: [
        'Combined Wifi & Motion Sensor',
        'Auto ON when you walk in',
        'Wireless Control via App',
        'Perfect for Hallways/Washrooms',
      ],
      image: '/images/products/pico-light-plus.png',
      gradient: 'from-purple-500 to-pink-500',
      iconBg: 'bg-purple-500',
    },
    {
      name: 'PICO MOTION',
      tagline: 'Simple PIR based lights control',
      features: [
        'Instant Motion Detection',
        'Saves Energy Automatically',
        'Simple Setup (No Wifi Needed)',
        'Ideal for Staircases/Stores',
      ],
      image: '/images/products/pico-motion.png',
      gradient: 'from-orange-500 to-red-500',
      iconBg: 'bg-orange-500',
    },
  ];

  const testimonials = [
    {
      name: 'Arjun Mehta',
      role: 'Homeowner, Mumbai',
      image: '/images/testimonials/customer-arjun.png',
      rating: 5,
      text: 'PICO IOT transformed my entire home! Setup was incredibly easy and the app is super intuitive. Love the geofencing feature!',
    },
    {
      name: 'Priya Sharma',
      role: 'Interior Designer, Bangalore',
      image: '/images/testimonials/customer-priya.png',
      rating: 5,
      text: 'I recommend PICO IOT to all my clients. It\'s affordable, reliable, and the motion sensor feature is a game-changer for hallways.',
    },
    {
      name: 'Rajesh Kumar',
      role: 'Business Owner, Delhi',
      image: '/images/testimonials/customer-rajesh.png',
      rating: 5,
      text: 'Installed PICO devices in my office. The energy savings are real! Auto-recovery feature means I never worry about power cuts.',
    },
  ];

  const setupSteps = [
    {
      step: '1',
      title: 'Install Device',
      description: 'Screw in PICO Light or install PICO Node in your switchboard',
      icon: '🔧',
    },
    {
      step: '2',
      title: 'Scan & Claim',
      description: 'Open app, scan QR code, enter WiFi credentials - Done in 2-3 min',
      icon: '📱',
    },
    {
      step: '3',
      title: 'Control & Automate',
      description: 'Control from anywhere, set schedules, enable geofencing',
      icon: '✨',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Sticky Funny Pig Video */}
      <StickyVideo />

      {/* Compact Hero Section */}
      <section className="relative pt-32 pb-12 px-4 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center space-y-6 relative z-10">
          {/* Launch Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-xs font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span>Launching Soon - December 2025</span>
          </div>

          {/* Compact Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            <span className="text-gray-900 dark:text-white">Make Every Switch </span>
            <span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Smart
            </span>
          </h1>

          {/* Compact Subheading */}
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Transform your home and office into an intelligent space. Control lights, fans, and appliances from anywhere—no rewiring, no hassle.
          </p>

          {/* Compact CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="#products"
              className="group px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto text-sm relative overflow-hidden"
            >
              <span className="relative z-10">Explore Products</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <a
              href="https://github.com/Thinking-Robot-Tech/Thinking-Robot/releases/download/v1.0.0/PICO.IOT.APP.apk"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white dark:bg-slate-800 text-gray-900 dark:text-white font-semibold rounded-xl border-2 border-gray-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-lg transition-all duration-300 w-full sm:w-auto text-sm"
            >
              Download App
            </a>
          </div>
        </div>
      </section>

      {/* Products Section - Right Below Hero */}
      <section id="products" className="py-12 px-4 relative">
        <div className="max-w-7xl mx-auto">
          {/* Compact Section Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              <span className="text-gray-900 dark:text-white">Featured </span>
              <span className="gradient-text">Products</span>
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Build the exact smart system you want, one piece at a time
            </p>
          </div>

          {/* Product Cards with Real Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="group relative glass p-6 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
                
                {/* Product Image */}
                <div className="relative w-full h-48 mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-900">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{product.name}</h3>
                <p className={`text-transparent bg-gradient-to-r ${product.gradient} bg-clip-text font-semibold mb-4 text-sm`}>
                  {product.tagline}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-4">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-gray-600 dark:text-gray-400">
                      <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <Link
                  href="/products"
                  className={`inline-flex items-center space-x-2 text-transparent bg-gradient-to-r ${product.gradient} bg-clip-text font-semibold hover:underline text-sm`}
                >
                  <span>Learn More</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 px-4 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-slate-900/50 dark:to-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-1">2-3 min</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Setup Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1">100%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Auto Recovery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-1">6+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Product Variants</div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              <span className="text-gray-900 dark:text-white">See </span>
              <span className="gradient-text">PICO IOT</span>
              <span className="text-gray-900 dark:text-white"> in Action</span>
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-400">
              Watch how easy it is to make your home smart
            </p>
          </div>

          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/sGhckFkh0hA"
              title="PICO IOT Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>
      </section>

      {/* App Showcase Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 via-purple-50/30 to-pink-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: App Screenshot */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl opacity-20 blur-2xl"></div>
              <div className="relative glass p-8 rounded-3xl">
                <div className="relative w-full max-w-sm mx-auto">
                  <Image
                    src="/images/app-showcase.png"
                    alt="PICO IOT App"
                    width={400}
                    height={800}
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Right: Features */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  <span className="text-gray-900 dark:text-white">Control Your Home</span>
                  <br />
                  <span className="gradient-text">From Your Phone</span>
                </h2>
                <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  The PICO IOT app puts complete control of your smart home in your pocket. Beautiful design, powerful features, and incredibly easy to use.
                </p>
              </div>

              {/* App Features */}
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Intuitive Interface</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Clean, modern design that anyone can use. Control all devices with a single tap.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Smart Automation</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Set schedules, timers, and geofencing rules. Your home adapts to your routine.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Family Sharing</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Everyone gets their own profile with personalized settings and favorites.</p>
                  </div>
                </div>
              </div>

              {/* Download Button */}
              <a
                href="https://github.com/Thinking-Robot-Tech/Thinking-Robot/releases/download/v1.0.0/PICO.IOT.APP.apk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 mt-4"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <span>Download for Android</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Setup Steps */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              <span className="text-gray-900 dark:text-white">Setup in </span>
              <span className="gradient-text">3 Simple Steps</span>
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-400">
              Get your smart home running in minutes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {setupSteps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < setupSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/4 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                )}

                {/* Step Card */}
                <div className="glass p-6 rounded-3xl text-center relative z-10">
                  {/* Step Number */}
                  <div className="text-5xl mb-3">{step.icon}</div>
                  <div className="w-10 h-10 mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-3">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-slate-900/50 dark:to-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              <span className="text-gray-900 dark:text-white">What Our </span>
              <span className="gradient-text">Customers Say</span>
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-400">
              Join thousands of happy smart home users
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass p-6 rounded-3xl hover:shadow-2xl transition-all duration-300">
                {/* Stars */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed">
                  {`"${testimonial.text}"`}
                </p>

                {/* Customer Info */}
                <div className="flex items-center space-x-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-500">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white text-sm">{testimonial.name}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative glass p-10 rounded-3xl text-center overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="gradient-text">Ready to Get Started?</span>
              </h2>
              <p className="text-base text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                Download the PICO IOT app and start controlling your home from anywhere
              </p>
              <a
                href="https://github.com/Thinking-Robot-Tech/Thinking-Robot/releases/download/v1.0.0/PICO.IOT.APP.apk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <span>Download PICO IOT App</span>
              </a>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-3">
                Available for Android • iOS coming soon
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
