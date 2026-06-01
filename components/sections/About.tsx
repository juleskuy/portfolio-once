import React from 'react';
import { profile } from '../../data/profile';

export const About: React.FC = () => {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 id="about-heading" className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-600">
            Get to know my background, skills, and what drives me as a developer.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Summary</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              {profile.about}
            </p>
            <p className="text-gray-600 leading-relaxed">
              Based in {profile.location}, I specialize in building scalable, interactive, user-centric web applications using modern frameworks and best practices. With a focus on performance, accessibility, and maintainability, I deliver high-quality solutions that meet both user needs and business goals.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Facts</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">
                  <strong className="text-gray-900">Location:</strong> {profile.location}
                </span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">
                  <strong className="text-gray-900">Focus:</strong> Full Stack &amp; Front-End Development
                </span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">
                  <strong className="text-gray-900">Passion:</strong> Building user-centric web experiences
                </span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">
                  <strong className="text-gray-900">Approach:</strong> Clean code, scalable architecture, modern best practices
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
