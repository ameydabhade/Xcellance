export default function Footer() {
  return (
    <footer className="bg-gray-100 p-4">
      <div className="text-center mb-6">
        <div className="w-20 h-20 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
          <span className="text-gray-500 text-xs">Logo</span>
        </div>
      </div>

      <div className="space-y-6 text-center">
        <div>
          <h3 className="font-bold text-blue-600 mb-2">Contact Us</h3>
          <a href="tel:+919175682823" className="block text-blue-600 font-bold">+91 9175682823</a>
          <p className="text-blue-600">drrudagi@gmail.com</p>
          <p className="text-blue-600">www.drrudagi.com</p>
        </div>

        <div>
          <h3 className="font-bold text-blue-600 mb-2">Open Hours</h3>
          <p className="text-blue-600">Mon-Sat: 10 AM – 9 PM</p>
        </div>

        <div>
          <h3 className="font-bold text-blue-600 mb-2">Location</h3>
          <p className="text-blue-600 font-bold">
            📍 Shop 43, First Floor, Kohinoor Grandeur, Mukai Chowk, Ravet, Pimpri 412101
          </p>
        </div>
      </div>

      {/* Google Maps Embed */}
      <div className="mt-6 bg-gray-200 rounded-lg overflow-hidden" style={{ height: '300px' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.090006682008!2d73.73218809999999!3d18.659956600000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b10fc5788b8b%3A0xa78bb2decc4efca1!2sDr%20Rudagi's%20Dental%20Centre%20Of%20Xcellence!5e0!3m2!1sen!2sin!4v1748115653813!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Dr. Rudagi's Dental Centre Location"
        ></iframe>
      </div>
    </footer>
  );
} 