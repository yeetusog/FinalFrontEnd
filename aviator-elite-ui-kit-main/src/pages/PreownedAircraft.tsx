
import ServiceLanding from './ServiceLanding';

const PreownedAircraft = () => {
  const carouselImages = [
    '/lovable-uploads/Heliforsale.png',
    '/lovable-uploads/heliforsale2.png',
    
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
