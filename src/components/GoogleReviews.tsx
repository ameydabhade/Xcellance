export default function GoogleReviews() {
  const reviews = [
    {
      name: "Priya Sharma",
      initials: "PS",
      date: "May 12, 2023",
      review: "It was a very pain free comfortable experience. Dr. Rudagi is patient friendly and will answer all queries. Latest advance dental technology and services available here. Highly recommended for any dental services and treatment."
    },
    {
      name: "Rajesh Patil", 
      initials: "RP",
      date: "April 7, 2023",
      review: "Dr Rudagi was clear, fast & precise. She explains well and does excellent treatment. She filled one of my front teeth and also extracted a broken tooth without any pain, each within minutes. Kudos to her excellence. One of the best I have experienced."
    },
    {
      name: "Anita Deshmukh",
      initials: "AD", 
      date: "January 22, 2023",
      review: "Amazing and fast service, latest technology and an expert dentist makes Dr. Rudagi's clinic the best dentist clinic in Pune. Dr. Rudagi was very courteous and professional and I look forward to going to her every time for all my dental needs. Thank you Dr. Rudagi!"
    }
  ];

  return (
    <section className="p-4">
      <div className="text-center mb-6">
        <img 
          src="/images/google.png" 
          alt="Google Logo" 
          className="h-12 w-32 mx-auto mb-4 object-contain" 
        />
        <h2 className="text-xl font-bold">What Our Patients Say</h2>
      </div>

      <div className="space-y-4">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white border rounded-lg p-4 shadow-sm">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                {review.initials}
              </div>
              <div>
                <h3 className="font-bold">{review.name}</h3>
                <p className="text-sm text-gray-600">{review.date}</p>
              </div>
            </div>
            <div className="flex text-yellow-400 mb-3">
              {[...Array(5)].map((_, i) => (
                <span key={i}>⭐</span>
              ))}
            </div>
            <p className="text-gray-700 text-sm">{review.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 