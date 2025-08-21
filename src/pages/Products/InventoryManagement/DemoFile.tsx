import React from 'react';

const DemoForm = () => {
  return (
    <div className="min-h-screen bg-blue-50 p-6 md:p-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 bg-white shadow-lg rounded-xl p-8">
        {/* Left Content */}
        <div>
          <h3 className="text-sm text-blue-500 font-semibold">Inventory Management Software</h3>
          <h1 className="text-3xl font-bold text-blue-900 mt-2 leading-snug">
            Manage your business professionally with Webaikon.
          </h1>
          <p className="text-gray-600 mt-4">
            Our Inventory Management Software is designed to help businesses efficiently track and manage their inventory
            of products, materials, and assets...
          </p>

          <h2 className="mt-6 font-semibold text-gray-800">Key Features:</h2>
          <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
            <li>Manage Products</li>
            <li>Manage Suppliers</li>
            <li>Manage Purchase</li>
            <li>Print Barcode</li>
            <li>Manage Stock and Sales</li>
            <li>GST Billing and Reports</li>
          </ul>
        </div>

        {/* Right Form */}
        <form className="bg-blue-100 p-6 rounded-lg shadow-md space-y-4">
          <h2 className="text-xl font-bold text-blue-800">Get started with a Webaikon Demo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Name*" className="p-3 rounded border border-gray-300" required />
            <input type="text" placeholder="Organization Name*" className="p-3 rounded border border-gray-300" required />
          </div>
          <input type="tel" placeholder="Mobile No.*" className="w-full p-3 rounded border border-gray-300" required />
          <input type="email" placeholder="Email*" className="w-full p-3 rounded border border-gray-300" required />
          <select className="w-full p-3 rounded border border-gray-300" required>
            <option>Select Demo For</option>
            <option>Inventory</option>
            <option>Hotel</option>
            <option>Restaurant</option>
            <option>Clinic</option>
          </select>
          <textarea
            rows="3"
            placeholder="Anything to help prepare our meeting..."
            className="w-full p-3 rounded border border-gray-300"
          ></textarea>
          <div className="flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4" />
            <label className="text-sm text-gray-700">I’m not a robot</label>
          </div>
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default DemoForm;
