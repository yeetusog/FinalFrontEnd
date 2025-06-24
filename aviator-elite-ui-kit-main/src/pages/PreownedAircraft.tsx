
import ServiceLanding from './ServiceLanding';

const PreownedAircraft = () => {
  const carouselImages = [
    'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop'
  ];

  return (
    <ServiceLanding
      title="Preowned Aircraft Sales"
      description="Curated selection of premium preowned aircraft with comprehensive inspection, valuation, and transaction support services."
      features={[
        "Pre-Purchase Inspections",
        "Aircraft Valuation & Appraisal",
        "Market Analysis & Pricing",
        "Documentation & Title Services",
        "Financing & Insurance Assistance",
        "Post-Sale Support & Warranty"
      ]}
      images={carouselImages}
    />
  );
};

export default PreownedAircraft;
