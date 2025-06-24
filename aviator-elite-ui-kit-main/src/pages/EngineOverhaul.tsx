
import ServiceLanding from './ServiceLanding';

const EngineOverhaul = () => {
  const carouselImages = [
    'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop'
  ];

  return (
    <ServiceLanding
      title="Engine Overhaul"
      description="Comprehensive engine overhaul services with certified technicians, genuine parts, and industry-leading turnaround times."
      features={[
        "Complete Engine Teardown & Inspection",
        "Precision Machining & Repair",
        "OEM Parts & Components",
        "Performance Testing & Certification",
        "Warranty Support & Documentation"
        
      ]}
      images={carouselImages}
    />
  );
};

export default EngineOverhaul;
