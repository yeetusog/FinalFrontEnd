
import ServiceLanding from './ServiceLanding';

const GroundSupport = () => {
  const carouselImages = [
    'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1594736797933-d0401ba690fe?w=800&h=600&fit=crop'
  ];

  return (
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
  );
};

export default GroundSupport;
