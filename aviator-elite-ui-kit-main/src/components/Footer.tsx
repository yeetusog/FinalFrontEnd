
import { Link } from 'react-router-dom';
import { Plane, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Plane className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Rotor Hub India</span>
            </div>
            <p className="text-gray-300">
              Leading aviation services provider offering luxury private charters, consulting, and aircraft solutions across India.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-sm">+91 9910066854</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-blue-400" />
              <span className="text-sm">rotorhubindia@gmail.com</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/private-charter" className="text-gray-300 hover:text-white transition-colors">Private Charter</Link></li>
              <li><Link to="/aviation-consulting" className="text-gray-300 hover:text-white transition-colors">Aviation Consulting</Link></li>
              <li><Link to="/engine-overhaul" className="text-gray-300 hover:text-white transition-colors">Engine Overhaul</Link></li>
              <li><Link to="/aircraft-parts" className="text-gray-300 hover:text-white transition-colors">Aircraft Parts</Link></li>
              <li><Link to="/ground-support" className="text-gray-300 hover:text-white transition-colors">Ground Support</Link></li>
              <li><Link to="/preowned-aircraft" className="text-gray-300 hover:text-white transition-colors">Preowned Aircraft</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-use" className="text-gray-300 hover:text-white transition-colors">Terms of Use</Link></li>
              <li><Link to="/sales-policy" className="text-gray-300 hover:text-white transition-colors">Sales Policy</Link></li>
              <li><Link to="/legal" className="text-gray-300 hover:text-white transition-colors">Legal</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-blue-400 mt-1" />
                <span className="text-gray-300 text-sm">
                   MANISH CORNER PLAZA,<br />
                   Sector 11 Dwarka, New Delhi, Delhi 110075
                </span>
              </div>
              <Link to="/get-details" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            Copyright © 2024 ROTOR HUB INDIA
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Designed for excellence in aviation services
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
