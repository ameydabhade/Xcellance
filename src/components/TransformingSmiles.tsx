interface TransformingSmilesProps {
  onBookAppointment: () => void;
}

export default function TransformingSmiles({ onBookAppointment }: TransformingSmilesProps) {
  return (
    <section className="p-4">
      <h2 className="text-xl font-bold text-center mb-2">
        <u>Transforming Smiles</u>
      </h2>
      <p className="text-center text-orange-500 font-bold mb-6">
        Witness the before and after the magic of our Painless Dental Implants!
      </p>

      <div className="space-y-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
            <span className="text-gray-500">Before/After Video {i}</span>
          </div>
        ))}
      </div>

      <p className="text-center my-6">
        Ready to witness the enchanting before-and-after journey?<br />
        Explore the magic of your potential new smile today!
      </p>

      <div className="space-y-4">
        <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
          <span className="text-gray-500">Patient Success Video 1</span>
        </div>
        <button onClick={onBookAppointment} className="bg-yellow-400 text-blue-900 py-3 px-6 rounded-lg font-bold w-full">
          Request a Call back ➤
        </button>
        <small className="block text-center text-gray-600">
          Complimentary Consultation & Digital scan (Worth ₹1,000)
        </small>

        <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center mt-6">
          <span className="text-gray-500">Patient Success Video 2</span>
        </div>
        <button onClick={onBookAppointment} className="bg-yellow-400 text-blue-900 py-3 px-6 rounded-lg font-bold w-full">
          Request a Call back ➤
        </button>
        <small className="block text-center text-gray-600">
          Complimentary Consultation & Digital scan (Worth ₹1,000)
        </small>
      </div>
    </section>
  );
} 