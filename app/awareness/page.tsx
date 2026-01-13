export default function AwarenessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-6">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">
        Health Awareness
      </h1>

      <div className="bg-red-100 border border-red-400 text-red-700 p-4 rounded-lg mb-8">
        <h2 className="font-semibold text-lg mb-2">
          Medical Disclaimer
        </h2>
        <p>
          This information is for awareness only and not a substitute
          for professional medical advice.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-blue-800 mb-4">
        Myths vs Facts
      </h2>

      <div className="bg-white shadow-md p-4 rounded-lg">
        <p className="font-semibold text-red-600">Myth:</p>
        <p>Cold food causes illness.</p>

        <p className="font-semibold text-green-600 mt-2">Fact:</p>
        <p>Illness is caused by germs, not food temperature.</p>
      </div>
    </div>
  );
}
