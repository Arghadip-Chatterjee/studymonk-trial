import React, { useState, useEffect } from 'react';
import axios from 'axios';

const JobPortal = () => {
  const [jobs, setJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(
          'https://jobsearch4.p.rapidapi.com/api/v1/Jobs/Search',
          {
            params: {
              SearchQuery: searchQuery,
            },
            headers: {
              'X-RapidAPI-Key': '1b43b998e8mshecf18b614780362p1be75ejsne18f9cebbd57',
              'X-RapidAPI-Host': 'jobsearch4.p.rapidapi.com',
            },
          }
        );
        setJobs(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchJobs();
  }, [searchQuery]);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Demo job offers data
  const demoJobOffers = [
    { id: 1, title: 'Demo Job 1', company: 'Demo Company 1', url: '#' },
    { id: 2, title: 'Demo Job 2', company: 'Demo Company 2', url: '#' },
    { id: 3, title: 'Demo Job 3', company: 'Demo Company 3', url: '#' },
  ];

  return (
    <div className="job-portal h-screen w-full bg-black py-8">
      {/* Header */}
      <header className="text-center w-full mb-8 flex jutify-center">
        <div></div>

        <div className='w-full flex-col'>
          <h1 className="text-4xl font-bold mb-2 text-white">Job Portal</h1>
          <p className="text-lg text-white">Find your dream job today!</p>
          <form className="mt-4">
            <input
              type="text"
              placeholder="Search jobs..."
              value={searchQuery}
              onChange={handleInputChange}
              className="px-4 py-2 border border-gray-300 rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoFocus
            />
          </form>
        </div>

        <div></div>
      </header>

      {/* Job Offers Section */}
      <section className="job-offers container mx-auto">
        <h2 className="text-2xl font-bold mb-4">
          {searchQuery ? `${searchQuery} Job Offers` : 'Job Offers'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {(searchQuery ? jobs.data : demoJobOffers) &&
            (searchQuery ? jobs.data : demoJobOffers).map((job) => (
              <div className="job-card bg-white p-4 rounded-md shadow-md" key={job.id}>
                <h3 className="text-lg font-bold mb-2">{job.title}</h3>
                <p className="text-gray-600">Company: {job.company}</p>
                <a href={job.url} target="_blank" rel="noopener noreferrer">
                  <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    Apply
                  </button>
                </a>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default JobPortal;
