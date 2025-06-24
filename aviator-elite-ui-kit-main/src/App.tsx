
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PrivateCharter from "./pages/PrivateCharter";
import AviationConsulting from "./pages/AviationConsulting";
import EngineOverhaul from "./pages/EngineOverhaul";
import AircraftParts from "./pages/AircraftParts";
import GroundSupport from "./pages/GroundSupport";
import PreownedAircraft from "./pages/PreownedAircraft";
import About from "./pages/About";
import GetDetails from "./pages/GetDetails";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import SalesPolicy from "./pages/SalesPolicy";
import Legal from "./pages/Legal";
import Success from "./pages/Success";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/private-charter" element={<PrivateCharter />} />
          <Route path="/aviation-consulting" element={<AviationConsulting />} />
          <Route path="/engine-overhaul" element={<EngineOverhaul />} />
          <Route path="/aircraft-parts" element={<AircraftParts />} />
          <Route path="/ground-support" element={<GroundSupport />} />
          <Route path="/preowned-aircraft" element={<PreownedAircraft />} />
          <Route path="/about" element={<About />} />
          <Route path="/get-details" element={<GetDetails />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/sales-policy" element={<SalesPolicy />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/success" element={<Success />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
