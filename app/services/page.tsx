export default function ServicesPage() {
  const services = [
    {
      name: "Ice Bath",
      price: 999,
      description: "Cold immersion therapy for recovery and inflammation reduction",
    },
    {
      name: "Jacuzzi",
      price: 1299,
      description: "Hot water therapy to relax muscles and improve circulation",
    },
    {
      name: "Steam",
      price: 799,
      description: "Detoxifying steam therapy for skin and respiratory health",
    },
    {
      name: "Combo",
      price: 1999,
      originalPrice: 3097,
      description: "Ice Bath + Jacuzzi + Steam at a discounted price",
    },
  ];

  return (
    <main className="min-h-screen px-6 py-12 bg-gradient-to-b from-blue-50 to-white">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-10">
        Our Services
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {services.map((service) => (
          <div
            key={service.name}
            className="border rounded-xl p-6 shadow-md bg-white hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-blue-800">
              {service.name}
            </h2>

            <p className="text-gray-600 mt-2 text-sm">
              {service.description}
            </p>

            <div className="mt-4">
              {service.originalPrice && (
                <p className="text-sm text-gray-400 line-through">
                  ₹{service.originalPrice}
                </p>
              )}
              <p className="text-2xl font-bold text-blue-900">
                ₹{service.price}
              </p>
            </div>

            <button className="mt-5 w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
