// pages/bookings.tsx
"use client";
import { useEffect, useState } from 'react';
import { fetchBookings } from '../../utils/bookings';


export default function BookingsPage() {
  const [bookings, setBookings] = useState<any[]>([]);

  useEffect(() => {
    async function loadBookings() {
      const data = await fetchBookings();
      setBookings(data);
    }

    loadBookings();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Bookings</h1>
      {bookings.length === 0 ? (
        <p>No bookings found</p>
      ) : (
        <ul>
          {bookings.map((b, idx) => (
            <li key={idx}>
              {b.customer_name} - {b.email} - {b.booking_date}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
