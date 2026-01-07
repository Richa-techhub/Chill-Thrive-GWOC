"use client";

import React, { useState } from "react";
import { supabase } from "../utils/supabaseClient";

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

    const { error } = await supabase.from("bookings").insert({
      customer_name: formData.name,
      email: formData.email,
      booking_date: formData.date,
    });

    if (error) {
      console.error("Supabase error:", error);
      alert("Booking failed. Check console.");
    } else {
      alert("Booking successful!");
      setFormData({ name: "", email: "", date: "" });
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow">
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
          className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600"
        >
          Book Now
        </button>
      </form>
    </div>
  );
}
