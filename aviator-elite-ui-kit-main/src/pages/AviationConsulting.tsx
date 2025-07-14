import ServiceLanding from './ServiceLanding';

const AviationConsulting = () => {
  const carouselImages = [
    'https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?w=800&h=600&fit=crop'
  ];

  return (
    <ServiceLanding
      title="Aviation Consultancy"
      description={`Rotor Hub India is a trusted aviation consultancy serving various Maintenance, Repair, and Overhaul (MRO) organizations. We are proud to have facilitated DGCA approvals for H+S Aviation, UK (2020) and StandardAero Business Aviation Services, USA (2025).

Our expertise covers end-to-end regulatory support, including preparation and submission of documents, coordination with authorities for timely approvals, and handling all financial remittances to the regulator on behalf of our clients.`}
      features={[
        "End-to-end regulatory support",
        "DGCA approval facilitation",
        "Document preparation and submission",
        "Coordination with authorities",
        "Financial remittance handling"
      ]}
      images={carouselImages}
    />
  );
};

export default AviationConsulting;
