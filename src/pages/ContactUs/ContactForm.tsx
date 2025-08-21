// import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-gray-100 py-12 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Address Section */}
        <div>
          <p className="text-sky-500 font-semibold">Come Visit Us At</p>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Address</h2>

          {/* Office Address */}
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-sky-500 p-4 rounded-full text-white text-xl">📍</div>
            <div>
              <h3 className="font-semibold text-lg text-gray-800">Office Address</h3>
              <p className="text-gray-600">
                2<sup>nd</sup> Floor Mishra Market, Bypass Road, Chas, Bokaro-827013 (Jharkhand) India.
              </p>
            </div>
          </div>

          {/* Phone Number */}
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-sky-500 p-4 rounded-full text-white text-xl">📞</div>
            <div>
              <h3 className="font-semibold text-lg text-gray-800">Our Phone Number</h3>
              <p className="text-gray-600">+91 7209189151, 9398578331, 7004943471</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="bg-sky-500 p-4 rounded-full text-white text-xl">✉️</div>
            <div>
              <h3 className="font-semibold text-lg text-gray-800">Our Email</h3>
              <p className="text-gray-600">info@webaikon.com</p>
              <p className="text-gray-600">webaikoninfotech@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <p className="text-sky-500 font-semibold">Send Message</p>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Drop Us A Line</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Full Name*" className="border w-full p-3 rounded-md" required />
              <input type="text" placeholder="Mobile No.*" className="border w-full p-3 rounded-md" required />
              <input type="email" placeholder="Email Address*" className="border w-full p-3 rounded-md" required />
              <input type="text" placeholder="Subject*" className="border w-full p-3 rounded-md" required />
            </div>

            <textarea placeholder="Write A Message..." rows={5} className="border w-full p-3 rounded-md" required />

            {/* reCAPTCHA placeholder */}
            <div className="border p-4 rounded-md w-full md:w-[300px]">
              <label className="flex items-center gap-2">
                <input type="checkbox" required />
                I'm not a robot
              </label>
              <p className="text-xs text-gray-500 mt-1">reCAPTCHA</p>
            </div>

            <button
              type="submit"
              className="bg-sky-500 text-white px-6 py-2 rounded-md hover:bg-sky-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
