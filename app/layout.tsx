import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Thinking Robot - Smart IoT Solutions | PICO IOT',
  description: 'Transform your home with PICO IOT smart devices. Simple, affordable, and incredibly reliable smart home automation - Made in India.',
  keywords: 'smart home, IoT, home automation, PICO IOT, smart devices, India',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="grid-background">
        <Navbar />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
