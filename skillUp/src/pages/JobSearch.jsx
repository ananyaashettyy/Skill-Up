import React, { useState } from 'react';
import axios from 'axios';
import './JobSearch.css'; // optional CSS file

function JobSearch() {
  const [jobs, setJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchJobs = async () => {
    if (!searchQuery) {
      alert("Please enter a job role to search.");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.get('http://localhost:5000/api/jobs', {
        params: {
          search: searchQuery,
          location: location,
        },
      });
      setJobs(response.data.results || []);
      setShowResults(true);
    } catch (error) {
      console.error('Error fetching jobs:', error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchJobs();
  };

  return (
    <div className="job-search-container">
      <h1> Job Search</h1>
      <form onSubmit={handleSearch} className="job-search-form">
        <input
          type="text"
          placeholder="Search for jobs (e.g. React, Python)"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading jobs...</p>}

      {showResults && (
        <div className="job-results">
          {jobs.length === 0 ? (
            <p>No jobs found for "{searchQuery}" in "{location || 'any location'}".</p>
          ) : (
            jobs.map((job) => (
              <div key={job.id} className="job-card">
                <h3>{job.role}</h3>
                <p><strong>Company:</strong> {job.company_name}</p>
                <p><strong>Location:</strong> {job.location || 'Remote'}</p>
                <a href={job.url} target="_blank" rel="noopener noreferrer">View Job</a>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default JobSearch;
