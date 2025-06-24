import { useState } from 'react';
import { Calendar, Clock, Users, MapPin, Plane } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PrivateCharter = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    passengers: '',
    departure: '',
    destination: '',
    departureDate: '',
    departureTime: '',
    returnDate: '',
    returnTime: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      contact: formData.phone,
      passengers: parseInt(formData.passengers),
      departure: formData.departure,
      destination: formData.destination,
      departureDate: formData.departureDate,
      departureTime: formData.departureTime,
      returnDate: formData.returnDate || null,
      returnTime: formData.returnTime || null
    };

    try {
      const response = await axios.post("https://localhost:7138/api/PrivateCharterModels/PostPrivateCharterModel", payload);

      if (response.status === 200 || response.status === 201) {
        navigate("/success");
      }
    } catch (err: any) {
      console.error(err);
      if (err.response?.data) {
        setError("API Error: " + JSON.stringify(err.response.data));
      } else {
        setError("Failed to connect to the server.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Navigation />
      <div className="pt-16 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Private Charter Booking</h1>
            <p className="text-xl text-gray-600">Experience luxury aviation with our premium charter services</p>
          </div>

          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
              <CardTitle className="text-2xl flex items-center">
                <Plane className="mr-3 h-6 w-6" />
                Charter Request Form
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="text-red-600 font-medium bg-red-100 px-4 py-2 rounded">
                    {error}
                  </div>
                )}

                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" name="firstName" required value={formData.firstName} onChange={handleChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" name="lastName" required value={formData.lastName} onChange={handleChange} />
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" name="phone" type="tel" required value={formData.phone} onChange={handleChange} />
                  </div>
                </div>

                {/* Flight Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="passengers" className="flex items-center">
                      <Users className="mr-2 h-4 w-4" />
                      Number of Passengers *
                    </Label>
                    <Input id="passengers" name="passengers" type="number" min="1" max="500" required value={formData.passengers} onChange={handleChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="departure" className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4" />
                      Departure City *
                    </Label>
                    <Input id="departure" name="departure" required value={formData.departure} onChange={handleChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="destination" className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4" />
                      Destination *
                    </Label>
                    <Input id="destination" name="destination" required value={formData.destination} onChange={handleChange} />
                  </div>
                </div>

                {/* Departure Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="departureDate" className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4" />
                      Departure Date *
                    </Label>
                    <Input id="departureDate" name="departureDate" type="date" required value={formData.departureDate} onChange={handleChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="departureTime" className="flex items-center">
                      <Clock className="mr-2 h-4 w-4" />
                      Departure Time *
                    </Label>
                    <Input id="departureTime" name="departureTime" type="time" required value={formData.departureTime} onChange={handleChange} />
                  </div>
                </div>

                {/* Return Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="returnDate" className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4" />
                      Return Date (Optional)
                    </Label>
                    <Input id="returnDate" name="returnDate" type="date" value={formData.returnDate} onChange={handleChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="returnTime" className="flex items-center">
                      <Clock className="mr-2 h-4 w-4" />
                      Return Time (Optional)
                    </Label>
                    <Input id="returnTime" name="returnTime" type="time" value={formData.returnTime} onChange={handleChange} />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-semibold rounded-lg transition-all duration-200"
                >
                  {isSubmitting ? "Submitting..." : "Submit Charter Request"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivateCharter;
