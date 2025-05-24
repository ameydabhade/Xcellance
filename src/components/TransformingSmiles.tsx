interface TransformingSmilesProps {
  onBookAppointment: () => void;
}

export default function TransformingSmiles({ onBookAppointment }: TransformingSmilesProps) {
  return (
    <section className="p-4 md:p-8 lg:p-12 max-w-7xl mx-auto">
      <h2 className="text-xl md:text-3xl font-bold text-center mb-2">
        <u>Transforming Smiles</u>
      </h2>
      <p className="text-center text-orange-500 font-bold mb-6 md:text-lg">
        Witness the before and after the magic of our Painless Dental Implants!
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-gray-200 rounded-lg h-48 md:h-64 flex items-center justify-center gap-4 p-4">
            <div className="flex-1 h-full flex flex-col items-center justify-center">
              <img 
                src={`/images/transform/before${i}.png`} 
                alt={`Before Smile ${i}`} 
                className="h-full object-cover rounded shadow"
              />
              <span className="text-xs md:text-sm mt-2 text-gray-600">Before</span>
            </div>
            <div className="flex-1 h-full flex flex-col items-center justify-center">
              <img 
                src={`/images/transform/after${i}.png`} 
                alt={`After Smile ${i}`} 
                className="h-full object-cover rounded shadow"
              />
              <span className="text-xs md:text-sm mt-2 text-gray-600">After</span>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center my-6 md:text-lg max-w-3xl mx-auto">
        Ready to witness the enchanting before-and-after journey?<br />
        Explore the magic of your potential new smile today!
      </p>

      <div className="md:grid md:grid-cols-2 gap-6">
        <div>
          <div className="bg-gray-200 rounded-lg h-48 md:h-64 flex items-center justify-center mb-4">
            <span className="text-gray-500">Patient Success Video 1</span>
          </div>
          <button onClick={onBookAppointment} className="bg-yellow-400 text-blue-900 py-3 px-6 rounded-lg font-bold w-full mb-2">
            Request a Call back ➤
          </button>
          <small className="block text-center text-gray-600">
            Complimentary Consultation & Digital scan (Worth ₹1,000)
          </small>
        </div>

        <div>
          <div className="bg-gray-200 rounded-lg h-48 md:h-64 flex items-center justify-center mb-4">
            <span className="text-gray-500">Patient Success Video 2</span>
          </div>
          <button onClick={onBookAppointment} className="bg-yellow-400 text-blue-900 py-3 px-6 rounded-lg font-bold w-full mb-2">
            Request a Call back ➤
          </button>
          <small className="block text-center text-gray-600">
            Complimentary Consultation & Digital scan (Worth ₹1,000)
          </small>
        </div>
      </div>
    </section>
  );
}