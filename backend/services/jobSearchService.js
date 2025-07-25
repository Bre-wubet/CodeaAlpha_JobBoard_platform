//advanced  job search service
import Job from '../models/Job.js';

// Search jobs by title
export const searchJobs = async (req, res) => {
  const { title, location, jobType, salaryRange } = req.query || {};

  // If no query parameters are provided, return all jobs
    const query = {};
    
    if (title?.trim()) {
      query.title = new RegExp(title.trim(), 'i'); // Case-insensitive search
    }
    
    if (location?.trim()) {
      query.location = new RegExp(location.trim(), 'i');
    }

    if (jobType?.trim()) {
      query.jobType = jobType.trim();
    }
    
    if (salaryRange) {
      const [minSalary, maxSalary] = salaryRange.split('-').map(Number);
      query.salary = { $gte: minSalary, $lte: maxSalary };
    }

    if (Object.keys(query).length === 0) {
      return Job.find(); // Return all jobs if no filters are applied
    }

    const jobs = await Job.find(query);

    return jobs;
};