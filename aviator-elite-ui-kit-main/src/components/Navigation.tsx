
import { useState } from 'react';
import { Menu, X, Plane } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Private Charter', path: '/private-charter' },
    { name: 'Aviation Consultancy', path: '/aviation-consulting' },
    { name: 'Engine Overhaul', path: '/engine-overhaul' },
    { name: 'Aircraft Parts & Components', path: '/aircraft-parts' },
    { name: 'Ground Support Equipment', path: '/ground-support' },
    { name: 'Preowned Aircraft Sales', path: '/preowned-aircraft' },
    
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Plane className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">Rotor Hub India</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* About Us Button - moved to rightmost */}
          <div className="hidden lg:flex ml-auto">
            <Link
              to="/about"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              About Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/about"
                className="block px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
