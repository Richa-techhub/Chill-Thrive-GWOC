"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

type Slot = {
  time: string;
  available: boolean;
};

const serviceOptions = [
  { id: "ice-bath", name: "Ice Bath Therapy" },
  { id: "jacuzzi", name: "Jacuzzi Therapy" },
  { id: "steam", name: "Steam Bath" },
  { id: "ice-steam", name: "Ice Bath + Steam" },
  { id: "ice-jacuzzi", name: "Ice Bath + Jacuzzi" },
  { id: "full-recovery", name: "Full Recovery Combo" },
];

const slots: Slot[] = [
  { time: "06:00 AM", available: true },
  { time: "07:00 AM", available: true },
  { time: "08:00 AM", available: true },
  { time: "10:00 AM", available: true },
  { time: "12:00 PM", available: true },
  { time: "04:00 PM", available: true },
  { time: "06:00 PM", available: true },
  { time: "08:00 PM", available: true },
];

export default function BookingForm() {
  const searchParams = useSearchParams();
  const serviceFromURL = searchParams.get("service") || "";

  const [service, setService] = useState(serviceFromURL);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [payment, setPayment] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!service || !date || !time || !name || !phone || !email || !payment) {
      setError("Please fill all fields and select payment method");
      return;
    }

    setError("");
    setLoading(true);

    try {
  await new Promise((res) => setTimeout(res, 1200));

  // 👉 BACKEND WILL SEND CONFIRMATION EMAIL HERE
  // sendConfirmationEmail(email, bookingDetails)

  setSuccess(true);
}
 catch {
      setError("Booking failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-white p-10 rounded-2xl shadow-md text-center">
        <h2 className="text-2xl font-bold text-green-600">
          Booking Confirmed 🎉
        </h2>

        <p className="mt-4 text-sm text-green-700 font-medium">
  📧 A confirmation email has been sent to <strong>{email}</strong>
</p>
<p className="text-xs text-gray-500 mt-1">
  Please check your inbox or spam folder.
</p>


        <div className="mt-6 text-left text-sm text-gray-700 space-y-2">
          <p><strong>Service:</strong> {serviceOptions.find(s => s.id === service)?.name}</p>
          <p><strong>Date:</strong> {date}</p>
          <p><strong>Time:</strong> {time}</p>
          <p><strong>Payment:</strong> {payment}</p>
        </div>

        {payment === "QR Code" && (
          <div className="mt-6">
            <p className="text-sm text-gray-600 mb-2">
              Scan QR Code to Pay
            </p>
            <img
              src="/images/qr-code.png"
              alt="QR Code"
              className="mx-auto w-40"
            />
          </div>
        )}

        {payment === "Pay at Venue" && (
          <p className="mt-6 text-sm text-gray-500">
            Please complete payment at the venue.
          </p>
        )}
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-2xl shadow-md space-y-6"
    >
      {/* Service Selection */}
      <div>
        <label className="block font-medium mb-1">Select Service</label>
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="w-full border rounded-lg px-4 py-2"
        >
          <option value="">Choose a service</option>
          {serviceOptions.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name}
            </option>
          ))}
        </select>
      </div>

      {/* Date */}
      <div>
        <label className="block font-medium mb-1">Select Date</label>
        <input
          type="date"
          min={today}
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border rounded-lg px-4 py-2"
        />
      </div>

      {/* Time Slots */}
      <div>
        <label className="block font-medium mb-2">Select Time Slot</label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {slots.map((slot) => (
            <button
              key={slot.time}
              type="button"
              disabled={!slot.available}
              onClick={() => setTime(slot.time)}
              className={`py-2 rounded-lg border text-sm transition
                ${
                  !slot.available
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : time === slot.time
                    ? "bg-blue-600 text-white"
                    : "hover:border-blue-600"
                }`}
            >
              {slot.time}
            </button>
          ))}
        </div>
      </div>

      {/* User Details */}
      <div>
        <label className="block font-medium mb-1">Full Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded-lg px-4 py-2"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Phone Number</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full border rounded-lg px-4 py-2"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border rounded-lg px-4 py-2"
        />
      </div>

      {/* Payment */}
      <div>
        <label className="block font-medium mb-2">Payment Method</label>
        <div className="flex gap-4">
          {["Pay at Venue", "QR Code"].map((method) => (
            <button
              key={method}
              type="button"
              onClick={() => setPayment(method)}
              className={`flex-1 py-3 rounded-lg border transition
                ${
                  payment === method
                    ? "bg-blue-600 text-white"
                    : "hover:border-blue-600"
                }`}
            >
              {method}
            </button>
          ))}
        </div>
      </div>

      {/* Error */}
      {error && <p className="text-red-600 text-sm">{error}</p>}

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition"
      >
        {loading ? "Booking..." : "Confirm Booking"}
      </button>
    </form>
  );
}
