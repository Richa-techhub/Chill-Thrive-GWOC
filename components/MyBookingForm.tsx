"use client";

import React, { useState } from "react";
import { supabase } from "../utils/supabaseClient";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    customer_name: "",
    email: "",
    booking_date: "",
    time_slot: "",
    phone_no: "",
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
      const { error } = await supabase.from("bookings").insert([
        {
          customer_name: formData.customer_name,
          email: formData.email,
          booking_date: formData.booking_date,
          time_slot: formData.time_slot,
          phone_no: formData.phone_no,
        },
      ]);

      if (error) throw error;

      alert("Booking successful!");
      setFormData({
        customer_name: "",
        email: "",
        booking_date: "",
        time_slot: "",
        phone_no: "",
      });
    } catch (err: any) {
      console.error("Booking failed:", err.message);
      alert("Booking failed. Check console.");
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
          name="customer_name"
          placeholder="Your Name"
          value={formData.customer_name}
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
          name="booking_date"
          value={formData.booking_date}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-md"
        />

        <input
          type="text"
          name="time_slot"
          placeholder="Time Slot (e.g., 2:00 PM)"
          value={formData.time_slot}
          onChange={handleChange}
          className="w-full p-3 border rounded-md"
        />

        <input
          type="text"
          name="phone_no"
          placeholder="Phone Number"
          value={formData.phone_no}
          onChange={handleChange}
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
