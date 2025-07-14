import ServiceLanding from './ServiceLanding';

const EngineOverhaul = () => {
  const carouselImages = [
    '/lovable-uploads/engine2.webp',
    '/lovable-uploads/ENGINE REPAIR 5.webp',
    '/lovable-uploads/ENGINE REPAIR.webp',
    '/lovable-uploads/engine.webp',
    '/lovable-uploads/ENGINE REPAIR 4.webp'
  ];

  return (
    <ServiceLanding
      title="Engine Overhaul"
      description="Rotor Hub India provides engine repair and overhaul services through
its DGCA approved engine MRO associates and caters to the following
engine Repair and Overhaul services :"
      features={[
        "Pratt & Whitney PT6 Series Engines and Pratt & Whitney PW Series engines",
        "APU Overhauls",
        "Starter Generator repair, overhaul and Overhaul Exchange units",
        "Various Engine Component Exchange or Outright Sale"
      ]}
      images={carouselImages}
    />
  );
};

export default EngineOverhaul;
