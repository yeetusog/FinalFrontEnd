
import ServiceLanding from './ServiceLanding';

const AviationConsulting = () => {
  const carouselImages = [
    'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1487252665478-49b61b47f302?w=800&h=600&fit=crop'
  ];

  return (
    <ServiceLanding
      title="Aviation Consultancy"
      description="Expert aviation consulting services to optimize your operations, ensure compliance, and drive strategic growth in the aviation industry."
      features={[
        "Regulatory Compliance & Certification",
        "Operational Efficiency Analysis",
        "Safety Management Systems",
        "Strategic Planning & Market Analysis",
        "Aircraft Acquisition Consulting"
        
      ]}
      images={carouselImages}
    />
  );
};

export default AviationConsulting;
