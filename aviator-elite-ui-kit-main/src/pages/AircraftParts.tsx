import ServiceLanding from './ServiceLanding';

const AircraftParts = () => {
  const carouselImages = [
    '/lovable-uploads/aircraft parts1.webp',
    '/lovable-uploads/aircraft parts 2.webp',
    '/lovable-uploads/AIRCRAFT PARTS 3.webp',
    '/lovable-uploads/AIRCRAFT PARTS4.webp'
  ];

  return (
    <ServiceLanding
      title="Aircraft Parts & Components"
      description="OEM & PMA Aircraft Parts
AOG Support | Quality Assurance | Global Inventory Network"
      features={[
        "Over two decades of experience in aircraft spares support in India",
        "Seamless end-to-end support including customs clearance",
        "Exclusive High Sea Sales services for Non-Scheduled Operators",
      ]}
      images={carouselImages}
    />
  );
};

export default AircraftParts;
