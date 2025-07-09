//advanced  job search service
import Job from '../models/Job.js';

// Search jobs by title
export const searchJobs = async (req, res) => {
  const { title, location, jobType, salaryRange } = req.query || {};

  // If no query parameters are provided, return all jobs
    const query = {};
    
    if (title) {
      query.title = new RegExp(title, 'i'); // Case-insensitive search
    }
    
    if (location) {
      query.location = new RegExp(location, 'i');
    }
    
    if (jobType) {
      query.jobType = jobType;
    }
    
    if (salaryRange) {
      const [minSalary, maxSalary] = salaryRange.split('-').map(Number);
      query.salary = { $gte: minSalary, $lte: maxSalary };
    }

    const jobs = await Job.find(query);

    return jobs;
};