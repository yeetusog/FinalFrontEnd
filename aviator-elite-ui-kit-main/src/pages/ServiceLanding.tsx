
import Navigation from '../components/Navigation';
import ImageCarousel from '../components/ImageCarousel';
import Footer from '../components/Footer';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceLandingProps {
  title: string;
  description: string;
  features: string[];
  images?: string[];
}

const ServiceLanding = ({ title, description, features, images = [] }: ServiceLandingProps) => {
  const defaultImages = [
    'https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1487252665478-49b61b47f302?w=800&h=600&fit=crop'
  ];

  const carouselImages = images.length > 0 ? images : defaultImages;

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-16 min-h-screen bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Image Carousel */}
            <div className="h-[500px] lg:h-[600px] order-2 lg:order-1">
              <ImageCarousel images={carouselImages} />
            </div>

            {/* Text Content */}
            <div className="space-y-8 order-1 lg:order-2">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  {title}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {description}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/get-details"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-200 font-semibold flex items-center justify-center group"
                >
                  Get Details
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 font-semibold flex items-center justify-center"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default ServiceLanding;
