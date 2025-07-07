import Resume from '../models/Resume.js';

export const uploadResume = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const newResume = new Resume({
      candidateId: req.user.id,  // adjust based on your schema (maybe req.body.candidateId?)
      filePath: req.file.path,
      // originalName: req.file.originalname,
    });

    await newResume.save();

    res.status(201).json({ message: 'Resume uploaded successfully', resume: newResume });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error saving resume' });
  }
};
