import BookingForm from "@/components/Bookingform";

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center px-4 py-16">
      <div className="max-w-xl w-full">
        <h1 className="text-3xl font-bold text-center text-blue-900 mb-8">
          Book Your Session
        </h1>

        <BookingForm />
      </div>
    </div>
  );
}
