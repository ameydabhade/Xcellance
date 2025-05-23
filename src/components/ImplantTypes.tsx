export default function ImplantTypes() {
  const implantData = [
    {
      title: "Single Implants",
      image: "Single Implant",
      description: "A Single dental implant crown is your ideal solution. It will:",
      benefits: [
        "Look and function just like a natural tooth",
        "Restore your natural chewing ability", 
        "Preserve the underlying bone",
        "Save your money in the long run"
      ]
    },
    {
      title: "Multiple Implants", 
      image: "Multi Implant",
      description: "A Multi-implant bridge. It is ideal for filling medium-sized gaps in your smile.",
      benefits: [
        "Exceptional Strength",
        "A Permanent solution",
        "Bone Preservation", 
        "A life long replacement for your natural teeth"
      ]
    },
    {
      title: "Implant-Supported Dentures",
      image: "Implant Dentures", 
      description: "offer a stable alternative to regular dentures.",
      benefits: [
        "Snap into place over 2-4 implants",
        "Help prevent bone loss",
        "Vastly improve your chewing and confidence"
      ]
    },
    {
      title: "All-on-4 / All-on-6",
      image: "All on 4",
      description: "All-on-4 & All-on-6 Dental Implants provide extra stability and support:",
      benefits: [
        "Resistant to wear and stains",
        "A permanent solution that does not need removal", 
        "Custom-designed to attach securely to 4-6 implants per arch",
        "It looks natural and strong enough to eat hard food"
      ]
    }
  ];

  return (
    <section className="bg-blue-600 text-white p-4 pb-16">
      <h2 className="text-2xl font-bold text-center text-yellow-300 mb-4">
        When it comes to Dental Implants, choose <em>Dr. Rudagi's Dental Centre</em>
      </h2>
      <p className="text-center text-blue-100 mb-8">
        At Dr. Rudagi's Dental Centre, we specialize in providing all types of dental implants 
        to help you achieve a beautiful and functional smile using the latest procedures and technology.
      </p>

      <div className="space-y-6">
        {implantData.map((implant, index) => (
          <div key={index} className="bg-white text-gray-800 p-4 rounded-lg">
            <div className="bg-gray-200 h-32 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-500">{implant.image}</span>
            </div>
            <h3 className="font-bold text-center mb-3">{implant.title}</h3>
            <p className="text-center mb-3">{implant.description}</p>
            <ul className="space-y-1">
              {implant.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
} 