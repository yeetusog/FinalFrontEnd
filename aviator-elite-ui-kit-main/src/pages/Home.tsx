
import Navigation from '../components/Navigation';
import ImageCarousel from '../components/ImageCarousel';
import Footer from '../components/Footer';
import { ArrowRight, Star, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const carouselImages = [
    '/lovable-uploads/2f2ac7a7-12b9-4818-84e0-2066672d7c91.JPG',
    '/lovable-uploads/FALCON7.jpg',
    '/lovable-uploads/7d20aacd-33cd-4bea-9a56-0fa28487fd8a.png'
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-16 min-h-screen bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Luxury Private Charter in India
                  <span className="text-blue-600"> Within Clicks</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Personal assistant included for seamless aviation experiences. Professional charter services, consulting, and aircraft solutions tailored for your needs.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/private-charter"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-200 font-semibold flex items-center justify-center group"
                >
                  Book Your Charter
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 font-semibold flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                <div className="flex items-center space-x-3">
                  <Star className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700 font-medium">Luxury Fleet</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700 font-medium">Safety First</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700 font-medium">24/7 Support</span>
                </div>
              </div>
            </div>

            {/* Image Carousel */}
            <div className="h-[800px] lg:h-[800px]">
              <ImageCarousel images={carouselImages} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
