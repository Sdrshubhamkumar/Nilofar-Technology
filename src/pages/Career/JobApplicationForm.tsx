import React from 'react';

const JobApplicationForm = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Apply here to get the position</h2>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-medium">First Name<span className="text-red-500">*</span></label>
            <input type="text" className="w-full border border-gray-300 rounded px-4 py-2" required />
          </div>
          <div>
            <label className="block font-medium">Last Name<span className="text-red-500">*</span></label>
            <input type="text" className="w-full border border-gray-300 rounded px-4 py-2" required />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-medium">Mobile No.<span className="text-red-500">*</span></label>
            <input type="tel" className="w-full border border-gray-300 rounded px-4 py-2" required />
          </div>
          <div>
            <label className="block font-medium">Email<span className="text-red-500">*</span></label>
            <input type="email" className="w-full border border-gray-300 rounded px-4 py-2" required />
          </div>
        </div>

        <div>
          <label className="block font-medium">Full Address<span className="text-red-500">*</span></label>
          <textarea className="w-full border border-gray-300 rounded px-4 py-2" rows="3" required></textarea>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-medium">Position<span className="text-red-500">*</span></label>
            <input type="text" className="w-full border border-gray-300 rounded px-4 py-2" required />
          </div>
          <div>
            <label className="block font-medium">Total Exp<span className="text-red-500">*</span></label>
            <input type="text" className="w-full border border-gray-300 rounded px-4 py-2" required />
          </div>
        </div>

        <div>
          <label className="block font-medium">Why should we hire you? <span className="text-red-500">*</span></label>
          <textarea className="w-full border border-gray-300 rounded px-4 py-2" rows="3" required></textarea>
        </div>

        <div>
          <label className="block font-medium">Upload Resume/CV<span className="text-red-500">*</span></label>
          <input type="file" className="w-full border border-gray-300 rounded px-4 py-2" required />
        </div>

        <div className="pt-4">
          <label className="inline-flex items-center">
            <input type="checkbox" className="mr-2" required /> I'm not a robot
          </label>
        </div>

        <button type="submit" className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-6 rounded">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default JobApplicationForm;
