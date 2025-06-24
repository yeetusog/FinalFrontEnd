
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Legal = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Legal Information</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Company Registration</h2>
              <p className="text-gray-600 leading-relaxed">
                AviationPro is a registered company operating under Indian aviation regulations and international aviation standards. Our operations are certified by the Directorate General of Civil Aviation (DGCA).
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Regulatory Compliance</h2>
              <p className="text-gray-600 leading-relaxed">
                We maintain compliance with all applicable aviation regulations including ICAO standards, Indian Aircraft Rules, and international safety protocols. Our certifications are regularly audited and updated.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Insurance and Liability</h2>
              <p className="text-gray-600 leading-relaxed">
                AviationPro maintains comprehensive aviation insurance coverage including public liability, professional indemnity, and aircraft hull insurance as required by law.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Dispute Resolution</h2>
              <p className="text-gray-600 leading-relaxed">
                Any disputes arising from our services will be resolved through arbitration in New Delhi, India, in accordance with Indian law.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Legal;
