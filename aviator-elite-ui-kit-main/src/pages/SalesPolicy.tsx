
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SalesPolicy = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Sales Policy</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Pricing and Payment</h2>
              <p className="text-gray-600 leading-relaxed">
                All prices are subject to change without notice. We accept major credit cards and bank transfers.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Order Processing</h2>
              <p className="text-gray-600 leading-relaxed">
                Orders are processed within 24-48 hours of confirmation. Delivery times vary based on service type and availability. Emergency services are available upon request.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cancellation Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                Cancellations must be made at least 24 hours in advance for charter services. Parts orders can be cancelled before shipping. Consulting services require 48-hour notice.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Warranty and Returns</h2>
              <p className="text-gray-600 leading-relaxed">
                All parts come with manufacturer warranty. 
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SalesPolicy;
