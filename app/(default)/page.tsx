import { fetchBookings } from "@/utils/bookings";
import Bookingform from "@/components/Bookingform";

export default async function Page() {
  const bookings = await fetchBookings();

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      {/* Booking Form Section */}
      <h1 style={{ marginBottom: "20px", textAlign: "center", fontSize: "2rem" }}>
        Book Your Session
      </h1>
      <Bookingform />

      {/* Existing Bookings Section */}
      <h1 style={{ marginTop: "40px", marginBottom: "20px", textAlign: "center", fontSize: "1.5rem" }}>
        Current Bookings
      </h1>

      {bookings.length === 0 && <p style={{ textAlign: "center" }}>No bookings found</p>}

      {bookings.map((booking: any, index: number) => (
        <div key={index} style={{ marginBottom: "16px", padding: "10px", border: "1px solid #ddd", borderRadius: "8px" }}>
          <p><b>Name:</b> {booking.customer_name}</p>
          <p><b>Email:</b> {booking.email}</p>
          <p><b>Date:</b> {booking.booking_date}</p>
          <p><b>Time Slot:</b> {booking.time_slot}</p>
          <p><b>Phone:</b> {booking.phone_no}</p>
        </div>
      ))}
    </div>
  );
}


