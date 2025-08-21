import React from 'react';

const Career = () => {
  return (
    <div className="bg-blue-50 min-h-screen py-12 px-6 md:px-16">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        {/* Section Header */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-blue-500">Career</h3>
          <h1 className="text-3xl font-bold text-blue-900">
            Discover, Develop, and Excel in{' '}
            <span className="italic text-sky-500">Your Career Journey.</span>
          </h1>
          <div className="w-16 h-1 bg-sky-400 mt-3 rounded"></div>
        </div>

        {/* Intro Paragraph */}
        <p className="text-gray-600 mb-8">
          At Webaikon, we are passionate about creating innovative and cutting-edge software solutions that transform
          businesses and impact lives. Join our diverse and dynamic team, where creativity meets technology, and together,
          we shape the future of software development.
        </p>

        {/* Why Work With Us Section */}
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Why Work With Us?</h2>
        <ul className="space-y-4 text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-blue-500">✔️</span>
            <p>
              <strong>Meaningful Projects:</strong> Be a part of projects that have a real impact on businesses and
              society. From groundbreaking apps to enterprise solutions, your work will make a difference.
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500">✔️</span>
            <p>
              <strong>Collaborative Environment:</strong> We foster a collaborative and inclusive culture where ideas are
              valued, and teamwork is encouraged. Our supportive environment allows you to learn, grow, and thrive.
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500">✔️</span>
            <p>
              <strong>Professional Development:</strong> We invest in our employees' growth by offering opportunities for
              skill development, workshops, and training programs.
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500">✔️</span>
            <p>
              <strong>Cutting-Edge Technology:</strong> Work with the latest tools and technologies in software
              development. Embrace the challenges and excitement of staying up-to-date.
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500">✔️</span>
            <p>
              <strong>Work–Life Balance:</strong> We believe in maintaining a healthy work–life balance. Our flexible work
              arrangements ensure you can excel in your career while enjoying your personal life.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Career;
