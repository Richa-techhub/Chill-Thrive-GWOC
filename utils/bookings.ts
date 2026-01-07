import { supabase } from './supabaseClient';

export async function fetchBookings() {
  try {
    const { data, error } = await supabase.from('bookings').select('*');

    if (error) {
      console.error('Supabase returned an error:', error.message ?? error);
      return [];
    }

    return data;
  } catch (err) {
    console.error('Fetch failed:', err);
    return [];
  }
}
