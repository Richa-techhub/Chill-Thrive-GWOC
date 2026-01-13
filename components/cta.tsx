import Link from "next/link";

export default function CTA() {
  return (
    <section className="section bg-blue-900 text-center text-white">
      <h2 className="text-4xl mb-6">
        Begin Your Recovery Journey
      </h2>

      <Link href="/booking">
        <button className="px-10 py-3 bg-white text-blue-800 rounded-full font-medium hover:bg-blue-100 transition">
          Book a Session
        </button>
      </Link>
    </section>
  );
}

