"use client";
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';

// Initialize Supabase (Use your environment variables)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function AdminDashboard() {
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // 1. Check if user is "logged in" (has the cookie)
    if (!document.cookie.includes('isAdmin=true')) {
      router.push('/admin/login'); // Kick them out if no cookie
      return;
    }

    // 2. Fetch data
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    // Select ALL columns from the 'bookings' table
    const { data, error } = await supabase
      .from('bookings')
      .select('*')

    if (error) console.error('Error fetching bookings:', error);
    else setBookings(data || []);
    
    setLoading(false);
  };

  if (loading) return <div className="p-10 text-center">Loading Dashboard...</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
          <button 
            onClick={() => {
              document.cookie = "isAdmin=false; path=/"; // Logout
              router.push('/');
            }}
            className="text-red-600 hover:text-red-800"
          >
            Logout
          </button>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
            {bookings.map((booking) => (
             <tr key={booking.id}>
            <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-500">
            {booking.booking_date} at {booking.time_slot}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            {booking.customer_name}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {booking.email}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            Service Name
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            Confirmed
            </span>
        </td>
        </tr>
         ))}
        </tbody>
        </table>
        </div>
      </div>
    </div>
  );
}