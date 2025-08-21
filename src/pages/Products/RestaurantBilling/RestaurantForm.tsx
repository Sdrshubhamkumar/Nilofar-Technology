// import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const RestaurantBilling = () => {
  return (
    <div className="bg-white text-gray-800 p-6 md:p-12">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Side - Info */}
        <div>
          <p className="text-sky-600 font-medium">Restaurant Billing Software</p>
          <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4 leading-tight">
            Let our advanced restaurant billing software take care of your business
            tasks – while you take care of your customers!
          </h2>
          <p className="text-gray-600 mb-6">
            Our Restaurant Billing Software is a technology solution designed to streamline and simplify the
            billing and invoicing processes within restaurants, cafes, and other food service establishments. It
            helps restaurant owners, managers, and staff efficiently manage orders, generate bills, process
            payments, and track sales.
          </p>
          <h3 className="font-semibold text-lg mb-2 text-gray-800">
            Take advantage of a range of innovative features to grow your bottom line:
          </h3>
          <ul className="space-y-2 text-gray-700">
            {[
              "Table management",
              "Menu management",
              "Recipes management",
              "Inventory management",
              "Kitchen order tickets (KOT)",
              "Multi-kitchen functionality",
              "Tax billing",
              "Dine-in and take away options",
              "A multitude of business reports",
              "Discounts and special offers",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start">
                <FaCheckCircle className="text-sky-500 mt-1 mr-2" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side - Form */}
        <div className="bg-gray-50 p-6 shadow rounded">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Get started with a Webaikon Software Online Demo.
          </h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Name<span className="text-red-500">*</span></label>
                <input type="text" className="w-full border p-2 rounded" />
              </div>
              <div>
                <label className="text-sm font-medium">Organization Name<span className="text-red-500">*</span></label>
                <input type="text" className="w-full border p-2 rounded" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">Mobile No.<span className="text-red-500">*</span></label>
              <input type="text" className="w-full border p-2 rounded" />
            </div>
            <div>
              <label className="text-sm font-medium">Email<span className="text-red-500">*</span></label>
              <input type="email" className="w-full border p-2 rounded" />
            </div>
            <div>
              <label className="text-sm font-medium">Demo For<span className="text-red-500">*</span></label>
              <select className="w-full border p-2 rounded">
                <option>Select Demo For</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium">Please share anything that will help prepare for our meeting.<span className="text-red-500">*</span></label>
              <textarea className="w-full border p-2 rounded" rows={4}></textarea>
            </div>
            <div className="pt-2">
              <button className="bg-sky-700 text-white px-6 py-2 rounded hover:bg-sky-800 transition">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RestaurantBilling;
