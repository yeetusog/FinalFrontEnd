
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TermsOfUse = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Terms of Use</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptance of Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing and using AviationPro services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Use License</h2>
              <p className="text-gray-600 leading-relaxed">
                Permission is granted to temporarily access the materials on AviationPro's website for personal, non-commercial transitory viewing only.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Service Limitations</h2>
              <p className="text-gray-600 leading-relaxed">
                AviationPro reserves the right to modify or discontinue services at any time without notice. We are not liable for any modification, suspension, or discontinuance of services.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-600 leading-relaxed">
                Questions about the Terms of Use should be sent to us at info@aviationpro.com.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfUse;
