
import ServiceLanding from './ServiceLanding';

const AircraftParts = () => {
  const carouselImages = [
    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&h=600&fit=crop'
  ];

  return (
    <ServiceLanding
      title="Aircraft Parts & Components"
      description="Extensive inventory of certified aircraft parts and components with global supply chain and rapid delivery capabilities."
      features={[
        "OEM & Certified Parts",
        "Global Inventory Network",
        "AOG Support",
        "Quality Assurance & Traceability",
        "Competitive Pricing",
        "Technical Support & Documentation"
      ]}
      images={carouselImages}
    />
  );
};

export default AircraftParts;
