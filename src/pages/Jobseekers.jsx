import React from 'react';
import '../css/Main.css';
import JobCard from '../components/ui/JobCard';

const jobs = [
  {
    title: 'Frontend Developer',
    company: 'BlueTech',
    location: 'Remote',
    salary: '$80k-$110k',
  },
  {
    title: 'UI/UX Designer',
    company: 'Designify',
    location: 'New York, NY',
    salary: '$70k-$95k',
  },
  {
    title: 'Data Analyst',
    company: 'InsightWorks',
    location: 'San Francisco, CA',
    salary: '$90k-$120k',
  },
];

const Jobseekers = () => {
  return (
    <div className="jobseekers-page">
      <section className="jobseekers-hero">
        <h1 className="jobseekers-title">Find Your Next Opportunity</h1>
        <p className="jobseekers-desc">Discover jobs tailored to your skills and interests. Apply in one click and take the next step in your career with TalentFlow.</p>
        <button className="jobseekers-cta">Browse Jobs</button>
      </section>
      <section className="jobseekers-featured">
        <h2 className="featured-title">Featured Jobs</h2>
        <div className="featured-jobs-list">
          {jobs.map((job, idx) => (
            <JobCard
              key={idx}
              title={job.title}
              company={job.company}
              location={job.location}
              salary={job.salary}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Jobseekers; 