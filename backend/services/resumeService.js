// This service handles resume uploads, storage, and validation
import multer from 'multer';
import path from 'path';
import Resume from '../models/Resume.js';

// Set up storage for uploaded resumes
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads/resumes'));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

// Initialize multer
const upload = multer({ storage });

// Upload resume
export const uploadResume = (req, res) => {
  upload.single('resume')(req, res, (err) => {
    if (err) {
      return res.status(500).json({ message: 'Error uploading resume' });
    }
    const newResume = new Resume({
      user: req.user.id,
      filePath: req.file.path,
    });
    newResume.save()
      .then(() => res.status(201).json({ message: 'Resume uploaded successfully' }))
      .catch((error) => res.status(500).json({ message: 'Error saving resume' }));
  });
};
