
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, Users, Award, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About Rotor Hub India
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rotor Hub India (RHI) is a leading aviation services provider specializing in business and commercial aviation in India. Founded in November 2017 and headquartered in New Delhi, RHI focuses on marketing, sales, and comprehensive customer support to meet the diverse needs of Indian commercial aviation operators and Public Sector Undertakings (PSUs).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Safety First</h3>
              <p className="text-gray-600">Uncompromising commitment to safety standards and protocols</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600">Certified professionals with decades of aviation experience</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600">Award-winning services and industry recognition</p>
            </div>
            <div className="text-center">
              <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Network</h3>
              <p className="text-gray-600">Worldwide partnerships and comprehensive coverage</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Rotor Hub India, we are committed to delivering world-class aviation solutions that maximize aircraft availability and minimize downtime. Our dedicated team connects customers to OEM-authorized Maintenance, Repair, and Overhaul (MRO) centres to ensure compliance, reliability, and performance.
            Our Core Services
            We proudly offer a wide range of aviation services, including:
            •	Procurement and Sale of Critical Aircraft Spares: Supplying essential parts to keep your fleet mission-ready.
            •	Fixed-Wing and Helicopter Engine Repair and Overhaul: Extending engine life and improving reliability.
            •	Component and Accessories Repair and Overhaul: Restoring vital aircraft systems to peak performance.
            •	Engine and Component Overhaul Exchange/Standard Exchange: Cost-effective solutions for time-sensitive repairs.
            •	Outright Sales: Direct purchase of aircraft engines, components, and parts.
            •	Avionics Support: Enhancing aircraft systems with the latest avionics technology.
            •	Ground Support Equipment (GSE): Providing high-quality GSE for seamless aircraft operations. Start packs for Helicopters and Business Jets, Combination Units for continuous power supply and Start, TRUs (Transformer Rectifier Units), Air Starters etc.
            •	Chemicals and Consumables: Supplying certified aviation-grade chemicals and consumables.
            •	Aircraft Charter Services: Charter solutions for medical transportation, VIP travel, and utility operations.
            •	Preowned Aircraft Sales
</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
