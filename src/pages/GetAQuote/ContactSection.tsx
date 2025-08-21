import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaUserFriends, FaClock, FaChartLine } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section className="bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-4">
          Let's Work <span className="text-sky-500 italic">Together</span>
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          We love working with new people and companies. Please take a moment to tell us about your project.
          Your messages will be responded to within <strong>ONE BUSINESS DAY</strong>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side */}
          <div className="space-y-10">
            <div className="flex items-start space-x-4">
              <FaPhoneAlt className="text-sky-500 text-4xl" />
              <div>
                <h4 className="font-semibold text-xl">Call Enquiry Assistance</h4>
                <p className="text-gray-600">We are always available on call to assist you with any questions you may have.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaUserFriends className="text-sky-500 text-4xl" />
              <div>
                <h4 className="font-semibold text-xl">Project Consultation</h4>
                <p className="text-gray-600">We provide you with all technical consultations for your project.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaChartLine className="text-sky-500 text-4xl" />
              <div>
                <h4 className="font-semibold text-xl">Project Estimation</h4>
                <p className="text-gray-600">You come to us with your project, and we do all of the planning and costing for you.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaClock className="text-sky-500 text-4xl" />
              <div>
                <h4 className="font-semibold text-xl">Schedule Your Appointment</h4>
                <p className="text-gray-600">We assist you in scheduling appointments whenever you wish to meet us.</p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <form className="bg-gray-50 p-8 rounded-md shadow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Full Name*" className="p-3 border border-gray-300 rounded w-full" required />
              <input type="tel" placeholder="Mobile No.*" className="p-3 border border-gray-300 rounded w-full" required />
              <input type="text" placeholder="Organization Name*" className="p-3 border border-gray-300 rounded w-full md:col-span-2" required />
              <input type="email" placeholder="Email Address*" className="p-3 border border-gray-300 rounded w-full" required />
              <input type="text" placeholder="Subject*" className="p-3 border border-gray-300 rounded w-full" required />
              <textarea placeholder="What's your Project About?" className="p-3 border border-gray-300 rounded w-full md:col-span-2 h-32" required></textarea>
            </div>

            <div className="mt-4">
              {/* Replace this with react-google-recaptcha for real use */}
              <div className="border border-gray-300 rounded p-4 text-center">[ CAPTCHA Placeholder ]</div>
            </div>

            <button type="submit" className="bg-sky-500 hover:bg-sky-600 text-white py-2 px-6 rounded mt-4">
              Submit
            </button>
          </form>
        </div>

        {/* Contact Info Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-center">
          <div className="bg-gray-100 p-6 rounded shadow">
            <FaEnvelope className="text-sky-500 text-3xl mb-2 mx-auto" />
            <h4 className="font-semibold text-lg">Email</h4>
            <p>info@webaikon.com</p>
            <p>webaikoninfotech@gmail.com</p>
          </div>

          <div className="bg-gray-100 p-6 rounded shadow">
            <FaPhoneAlt className="text-sky-500 text-3xl mb-2 mx-auto" />
            <h4 className="font-semibold text-lg">Phone</h4>
            <p>+91 7209189151, 9398578331</p>
            <p>+91 7004943471</p>
          </div>

          <div className="bg-gray-100 p-6 rounded shadow">
            <FaMapMarkerAlt className="text-sky-500 text-3xl mb-2 mx-auto" />
            <h4 className="font-semibold text-lg">Address</h4>
            <p>2<sup>nd</sup> Floor Mishra Market, Bypass Road, Chas</p>
            <p>Bokaro-827013 (Jharkhand) India</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
