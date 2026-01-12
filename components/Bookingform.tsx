"use client";

import { useState } from "react";
import { supabase } from "@/utils/supabaseClient";

export default function BookingForm() {
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [service, setService] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !customerName ||
      !phone ||
      !bookingDate ||
      !timeSlot ||
      !service ||
      !paymentMethod
    ) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const { error } = await supabase.from("bookings").insert([
        {
          customer_name: customerName,
          phone_no: phone,
          booking_date: bookingDate,
          time_slot: timeSlot,
          service: service,
          payment_method: paymentMethod, // OK even if column doesn't exist
          status: "Pending",
        },
      ]);

      if (error) {
        console.error("Booking error:", error);
        alert("Booking failed. Check console.");
        return;
      }

      alert("Booking successful!");

      // Reset form
      setCustomerName("");
      setPhone("");
      setBookingDate("");
      setTimeSlot("");
      setService("");
      setPaymentMethod("");
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-md space-y-5"
    >
      <h2 className="text-2xl font-semibold text-center">
        Book Your Session
      </h2>

      {/* Name */}
      <input
        type="text"
        placeholder="Full Name"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
        className="w-full p-3 border rounded-lg"
      />

      {/* Phone */}
      <input
        type="tel"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full p-3 border rounded-lg"
      />

      {/* Date */}
      <input
        type="date"
        value={bookingDate}
        onChange={(e) => setBookingDate(e.target.value)}
        className="w-full p-3 border rounded-lg"
      />

      {/* Time Slot */}
      <select
        value={timeSlot}
        onChange={(e) => setTimeSlot(e.target.value)}
        className="w-full p-3 border rounded-lg"
      >
        <option value="">Select Time Slot</option>
        <option value="06:00 - 07:00">06:00 - 07:00</option>
        <option value="07:00 - 08:00">07:00 - 08:00</option>
        <option value="08:00 - 09:00">08:00 - 09:00</option>
      </select>

      {/* Services */}
      <div>
        <h3 className="font-semibold mb-2">Select Service</h3>

        <div className="grid grid-cols-2 gap-3">
          {[
            { name: "Ice Bath", price: "₹999" },
            { name: "Jacuzzi", price: "₹1499" },
            { name: "Steam", price: "₹799" },
            { name: "Combo", price: "₹1999", old: "₹2499" },
          ].map((item) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setService(item.name)}
              className={`p-3 rounded-lg border text-left ${
                service === item.name
                  ? "border-blue-600 bg-blue-50"
                  : ""
              }`}
            >
              <p className="font-medium">{item.name}</p>
              <p className="text-sm">
                {item.old && (
                  <span className="line-through text-gray-400 mr-2">
                    {item.old}
                  </span>
                )}
                <span className="font-semibold">{item.price}</span>
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Payment */}
      <div>
        <h3 className="font-semibold mb-2">Payment Method</h3>

        <div className="space-y-3">
          <label
  className={`flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition
    ${
      paymentMethod === "Pay at Venue"
        ? "border-blue-600 bg-blue-50"
        : ""
    }`}
>

            <input
              type="radio"
              name="payment"
              value="Pay at Venue"
              checked={paymentMethod === "Pay at Venue"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Pay at Venue
          </label>

          <label
  className={`flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition
    ${
      paymentMethod === "QR Code"
        ? "border-blue-600 bg-blue-50"
        : ""
    }`}
>

            <input
              type="radio"
              name="payment"
              value="QR Code"
              checked={paymentMethod === "QR Code"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Pay via QR Code
          </label>
        </div>

        {paymentMethod === "QR Code" && (
  <div className="mt-4 p-4 border rounded-lg text-center bg-gray-50">
    <p className="text-sm mb-2 font-medium">Scan to Pay</p>
    <img
      src="/qr-placeholder.png"
      alt="QR Code"
      className="mx-auto w-40"
    />
    <p className="text-xs text-gray-500 mt-2">
      Show this QR code at the venue after payment
    </p>
  </div>
)}

      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
      >
        {loading ? "Booking..." : "Confirm Booking"}
      </button>
    </form>
  );
}

