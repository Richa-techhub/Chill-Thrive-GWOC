"use client";

import { useEffect, useState } from 'react';
// Check if your file is named 'MyBookingForm' or 'BookingForm'
import BookingForm from '@/components/MyBookingForm'; 
import { fetchBookings } from '../../utils/bookings';

export default function BookingsPage() {
  const [bookings, setBookings] = useState<any[]>([]);

  useEffect(() => {
    async function loadBookings() {
      try {
        const data = await fetchBookings();
        if (data) setBookings(data);
      } catch (e) {
        console.log("Not connected to DB yet");
      }
    }
    loadBookings();
  }, []);

  return (
    // 🔴 THIS WRAPPER FIXES THE OVERLAP 🔴
    <div 
      className="min-h-screen pb-12 bg-gradient-to-br from-blue-50 via-white to-cyan-50"
      style={{ paddingTop: '200px' }} 
    >
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Page Title */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Book Your Session
          </h1>
          <p className="text-xl text-gray-600">
            Recover, Reset, and Rejuvenate.
          </p>
        </div>

        {/* The Form Container */}
        <div className="max-w-md mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100">
            <BookingForm />
          </div>
          <div className="mt-4 text-center text-sm text-gray-500">
            <p>🔒 Secure Booking • Pay at Venue Available</p>
          </div>
        </div>

        {/* Current Bookings List */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Current Bookings List</h2>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            {bookings.length === 0 ? (
              <div className="p-8 text-center text-gray-500">No bookings found yet.</div>
            ) : (
              <ul className="divide-y divide-gray-200">
                {bookings.map((b, idx) => (
                  <li key={idx} className="p-4 hover:bg-gray-50 flex justify-between items-center">
                    <div>
                      <span className="font-semibold text-blue-900">{b.customer_name}</span>
                      <span className="text-gray-500 text-sm ml-2">({b.email})</span>
                    </div>
                    <div className="text-gray-600 font-medium">
                      {b.booking_date}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}