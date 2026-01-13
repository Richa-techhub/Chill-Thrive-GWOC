"use client";

import { useRouter } from "next/navigation";

export default function ComboCard({ combo }: any) {
  const router = useRouter();

  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-white border rounded-2xl p-6 shadow-md hover:shadow-lg transition">
      
      {/* Badge */}
      <span className="absolute -top-3 right-4 bg-blue-600 text-white text-xs px-4 py-1 rounded-full">
        {combo.badge}
      </span>

      <h3 className="text-xl font-bold text-blue-900">
        {combo.name}
      </h3>

      <p className="mt-2 text-gray-600">
        ⏱ {combo.duration}
      </p>

      <div className="mt-4">
        <span className="line-through text-gray-400 mr-2">
          {combo.originalPrice}
        </span>
        <span className="text-2xl font-bold text-blue-700">
          {combo.discountedPrice}
        </span>
      </div>

      <button
        onClick={() => router.push(`/booking?service=${combo.id}`)}
        className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition"
      >
        Book Combo
      </button>
    </div>
  );
}

