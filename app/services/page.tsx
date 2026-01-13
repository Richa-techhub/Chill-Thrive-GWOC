import ServiceDetailCard from "@/components/ServiceDetailCard";
import ComboCard from "@/components/ComboCard";
import { services } from "@/data/services";
import { combos } from "@/data/combos";

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Page Heading */}
      <h1 className="text-4xl font-bold text-center text-blue-900">
        Our Services
      </h1>
      <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
        Explore our science-backed recovery therapies designed to rejuvenate your body and mind.
      </p>

      {/* Services */}
      <div className="mt-16">
        {services.map((service) => (
          <ServiceDetailCard key={service.id} service={service} />
        ))}
      </div>

      {/* Combo Section */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-blue-900 text-center">
          Combo Packages
        </h2>
        <p className="text-center text-gray-600 mt-3">
          Maximize recovery with our discounted combo therapies
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {combos.map((combo) => (
            <ComboCard key={combo.id} combo={combo} />
          ))}
        </div>
      </div>
    </div>
  );
}
