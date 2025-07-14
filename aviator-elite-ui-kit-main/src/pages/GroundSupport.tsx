import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ServiceLanding from './ServiceLanding';

const GroundSupport = () => {
  const carouselImages = [
    '/lovable-uploads/1.jpg',
    '/lovable-uploads/2.jpg',
    '/lovable-uploads/3.jpg',
    '/lovable-uploads/4.jpg'
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <ServiceLanding
          title="Ground Support Equipment"
          description="Authorized Distributor — Levon Aviation Power Products
Rotor Hub India is the exclusive distributor of Levon Aviation Power Products (UK) in India, marketing and selling their products across India, Nepal, Sri Lanka, and Bangladesh."
          features={[
            "Aircraft Tugs & Pushback Equipment",
            "Ground Power Units (GPU)",
            "Air Start Units & Compressors",
            "Baggage & Cargo Handling",
            "Maintenance Platforms & Stands",
            "24/7 Equipment Support"
          ]}
          images={carouselImages}
        />
        {/* Place your additional content here, below ServiceLanding and above Footer */}
        <div className="max-w-3xl mx-auto mt-10 space-y-8 text-gray-700">
          <h2 className="text-2xl font-bold text-blue-800">Portable Start Power Pack</h2>
          <p>
            Levon Aviation's Starter Units are designed for starting aircraft in the field or remote locations. They are manufactured with outputs from 1000A to 5000A for starting the APU or aircraft engine. The units are fitted with sealed lead acid high discharge batteries, making them relatively small and lightweight for their power.
          </p>
          <p>
            As these batteries are approved as non-hazardous cargo for aviation, the small starter units can be carried on-board aircraft, making them essential as emergency power for fixed wing and helicopters landing in remote locations.
          </p>
          <p>
            Levon Aviation technology achieves a very high power-to-weight ratio, making it one of the most powerful portable power packs available worldwide.
          </p>
          <h2 className="text-2xl font-bold text-blue-800">Continuous Power Pack</h2>
          <p>
            Continuous DC power supplies are used for avionics work, maintenance, diagnostics, and demonstrations. These GPUs are in operation at hangars, maintenance facilities, and airports worldwide, praised for their efficiency, safety, and flexibility with all kinds of aircraft.
          </p>
          <h2 className="text-2xl font-bold text-blue-800">Combination Unit</h2>
          <p>
            The Combination Units combine continuous power supply and starter units, offered in a range from 50A Continuous–1000A Peak to 400A Continuous–5000A Peak.
          </p>
          <p>
            The units are equipped with digital current and voltage meters, and protection against overload, over-voltage, and over-temperature.
          </p>
          <p>
            Aircraft ground power packs can be customised to meet customer requirements. Packs can be painted as per customer’s choice, and cables can be manufactured according to requirements, with any cable size, length, and termination fitted.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GroundSupport;
