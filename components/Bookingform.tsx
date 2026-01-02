"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const { data, error } = await supabase.from("bookings").insert([formData]);

    if (error) {
      console.error("Supabase insert error:", error);
      alert("Booking failed. Check console for details.");
      return;
    }

    console.log("Inserted data:", data);
    alert("Booking submitted successfully!");
    setFormData({ name: "", email: "", date: "" });
  } catch (err) {
    console.error("Unexpected error:", err);
    alert("Something went wrong.");
  }
};


  

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Book an Appointment
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-md"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-md"
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-md"
        />
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-md"
        >
          Submit Booking
        </button>
      </form>
    </div>
  );
}
