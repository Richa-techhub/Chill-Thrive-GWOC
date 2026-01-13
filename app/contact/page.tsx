export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-6">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">
        Contact Us
      </h1>

      <div className="bg-white p-6 rounded-xl shadow-md mb-6">
        <p>Email: chillthrive@gmail.com</p>
        <p className="mt-2">Phone: +91 092270 25160</p>
      </div>

      <div className="overflow-hidden rounded-xl shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.9654778586173!2d72.7719262!3d21.153772099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04d71f6a8ac3b%3A0xb610c6ffed190bbe!2sChill%20thrive%20Ice%20bath!5e0!3m2!1sen!2sin!4v1768294754846!5m2!1sen!2sin"
          width="100%"
          height="400"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
