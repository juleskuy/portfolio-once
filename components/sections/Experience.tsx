import React from 'react';
import { experiences } from '../../data/experience';

export const Experience: React.FC = () => {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 id="experience-heading" className="text-3xl font-bold text-gray-900 mb-4">Experience</h2>
          <p className="text-lg text-gray-600">
            My professional journey and key roles in the tech industry.
          </p>
        </div>
        <div className="space-y-8">
          {experiences.map((exp) => (
            <article
              key={exp.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{exp.role}</h3>
                  <p className="text-blue-600 font-medium">{exp.company}</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="inline-block bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>
              </div>
              <ul className="space-y-2 mb-4">
                {exp.description.map((desc, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">{desc}</span>
                  </li>
                ))}
              </ul>
              {exp.tech && exp.tech.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
