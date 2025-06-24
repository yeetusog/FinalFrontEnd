
import { CheckCircle, ArrowLeft, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Success = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Navigation />
      
      <div className="pt-16 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-2xl shadow-2xl p-12 space-y-8">
            <div className="flex justify-center">
              <CheckCircle className="h-20 w-20 text-green-500" />
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900">
              Request Submitted Successfully!
            </h1>
            
            <div className="space-y-4">
              <p className="text-xl text-gray-600">
                Thank you for choosing AviationPro for your private charter needs.
              </p>
              <p className="text-lg text-gray-600">
                Your charter request has been received and our team will contact you within 2 hours with a detailed quote and aircraft options.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">What happens next?</h3>
              <ul className="text-left space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">1</span>
                  Our aviation specialists review your requirements
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">2</span>
                  Aircraft availability and pricing confirmation
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">3</span>
                  Personalized quote sent to your email
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">4</span>
                  Flight confirmation and payment processing
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center justify-center space-x-2 text-blue-600">
                <Phone className="h-5 w-5" />
                <span className="font-medium">+91 98765 43210</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-blue-600">
                <Mail className="h-5 w-5" />
                <span className="font-medium">charter@aviationpro.com</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium flex items-center justify-center"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Home
              </Link>
              <Link
                to="/private-charter"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200 font-medium"
              >
                New Booking
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Success;
