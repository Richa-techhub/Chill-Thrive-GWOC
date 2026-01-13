"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ServiceDetailCard({ service }: any) {
  const router = useRouter();

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2">
        
        {/* Image */}
        <div className="relative h-64 md:h-full">
          <Image
            src={service.image}
            alt={service.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-blue-900">
              {service.name}
            </h2>

            <p className="text-gray-600 mt-3">
              {service.description}
            </p>

            <div className="mt-4">
              <p className="font-medium text-gray-700">
                ⏱ Duration: {service.duration}
              </p>
            </div>

            <ul className="mt-4 space-y-2 text-gray-600">
              {service.benefits.map((b: string, i: number) => (
                <li key={i}>✔ {b}</li>
              ))}
            </ul>

            <p className="mt-4 text-xl font-semibold text-blue-700">
              {service.price}
            </p>
          </div>

          <button
            onClick={() => router.push(`/booking?service=${service.id}`)}
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
